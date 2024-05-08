import { useAtom } from "jotai";
import { tabAtoms } from "../../atoms/tabAtoms";
import { active, tabContainer, tabStyle } from "./index.css";

function Tabs() {
  const [tab, setTab] = useAtom(tabAtoms);

  const handleTab = () => {
    setTab((prev) => (prev === "TODO" ? "DONE" : "TODO"));
  };

  return (
    <div className={tabContainer}>
      <button
        className={`${tabStyle} ${tab === "TODO" && active}`}
        onClick={handleTab}
      >
        TODO
      </button>
      <button
        className={`${tabStyle} ${tab === "DONE" && active}`}
        onClick={handleTab}
      >
        DONE
      </button>
    </div>
  );
}
export default Tabs;
