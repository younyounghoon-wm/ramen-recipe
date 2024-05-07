import { dateStyle, description, headerStyle } from "./index.css";

function Header() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");

  return (
    <header className={headerStyle}>
      <h1 className={dateStyle}>
        {year}.{month}.{date}
      </h1>
      <span className={description}>do it-list</span>
    </header>
  );
}
export default Header;
