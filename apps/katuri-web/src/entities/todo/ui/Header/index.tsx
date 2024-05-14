import useTodayDate from "../../hooks/useTodayDate";
import { dateStyle, description, headerStyle } from "./index.css";

function Header() {
  const { year, month, date, day } = useTodayDate();

  const handleGo = () => {
    location.href = "https://elfoxero.github.io/html5notifications/";
  };

  const handleNoti = () => {
    Notification.requestPermission()
      .then((result) => {
        if (result === "granted") {
          new Notification("Hello World!");
        }
      })
      .catch((err) => {
        alert("error");
      });
  };

  return (
    <header className={headerStyle}>
      <button onClick={handleGo}>go push site</button>
      <button onClick={handleNoti}>go push site</button>
      <h1 className={dateStyle}>
        {year}.{month}.{date} ({day})
      </h1>
      <span className={description}>do it-list</span>
    </header>
  );
}
export default Header;
