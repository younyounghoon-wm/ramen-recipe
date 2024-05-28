import { useState } from "react";
import useTodayDate from "../../hooks/useTodayDate";
import { dateStyle, description, headerStyle } from "./index.css";
import axios from "axios";

function Header() {
  const { year, month, date, day } = useTodayDate();
  const [notification, setNotification] = useState<"ON" | "OFF">("OFF");

  const handleNotification = async () => {
    if (notification === "OFF") {
      // 구독 요청
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        console.error("서비스 워커 등록되지 않음");
        return;
      }

      const subscribeInfo = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
          "BBz-aLS6tcINQi2bVz2c5wJDnnkWr5EaseoR38VoSfJjeivq1bioH1RRqAD1acRhTrDgab6yqn__Uva9t_D9aRo",
      });

      // 서버에 구독정보 보내기
      const res = await axios.post(
        "http://localhost:8000/subscribe",
        subscribeInfo
      );
      setNotification("ON");
      return;
    }
    // 구독 취소
    setNotification("OFF");
  };

  return (
    <header className={headerStyle}>
      <button onClick={handleNotification}>알림 {notification}</button>
      <h1 className={dateStyle}>
        {year}.{month}.{date} ({day})
      </h1>
      <span className={description}>do it-list</span>
    </header>
  );
}
export default Header;
