import { useState } from "react";
import useTodayDate from "../../hooks/useTodayDate";
import { dateStyle, description, headerStyle } from "./index.css";
import axios from "axios";

const BASE_URL = "https://e8eb-59-12-102-133.ngrok-free.app";
const PUBLIC_KEY =
  "BGEGP34Euo3gq0WJdveZbRFY7awmPeNir7zve6sM30_S2sWB1k9hBFlo9LDbYZp97gxo7_j_z35mTFXTki5bqxU";

function Header() {
  const { year, month, date, day } = useTodayDate();
  const [notification, setNotification] = useState<"ON" | "OFF">("OFF");

  const handleNotification = async () => {
    if (notification === "OFF") {
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        console.error("서비스 워커 등록되지 않음");
        return;
      }

      // 알림 권한 요청하기
      const permission = await Notification.requestPermission();

      if (permission === "denied" || permission === "default") {
        alert("알림 권한을 허용해주세요.");
        return;
      }

      // 구독 요청
      const subscribeInfo = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_KEY,
      });

      // 서버에 구독정보 보내기
      const res = await axios.post(`${BASE_URL}/push`, subscribeInfo);

      alert(`구독정보 데이터: ${JSON.stringify(res.data)}`);
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
