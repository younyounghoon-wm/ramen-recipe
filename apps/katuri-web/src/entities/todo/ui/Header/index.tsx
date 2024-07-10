import { useState } from "react";
import useTodayDate from "../../hooks/useTodayDate";
import { dateStyle, description, headerStyle } from "./index.css";
import Axios from "../../../../../networks/axios";

const PUBLIC_KEY =
  "BDoQJ65WkxhE_2QJWJD8NWB0-TZKmjZ6nPNQwzp23QHbmB7EtgRmn_a5x_e6ZNhY61tBv5YN5d1WcyQZN_r-IOI";

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

      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        subscription.unsubscribe();
      }

      // 구독 요청
      const subscribeInfo = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_KEY,
      });

      // 서버에 구독정보 보내기
      await Axios.post("/subscription", subscribeInfo);

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
