import { useAtom, useAtomValue } from "jotai";
import { tabAtoms } from "../../atoms/tabAtoms";
import { active, tabContainer, tabStyle } from "./index.css";
import { todosAtom } from "../../atoms/todoAtoms";

function Tabs() {
  const [tab, setTab] = useAtom(tabAtoms);
  const todos = useAtomValue(todosAtom);

  const handleTab = () => {
    setTab((prev) => (prev === "TODO" ? "DONE" : "TODO"));
  };

  const todoCount = todos.filter((todo) => !todo.completed).length;
  const doneCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className={tabContainer}>
      <button
        className={`${tabStyle} ${tab === "TODO" && active}`}
        onClick={handleTab}
      >
        TODO
        <span>({todoCount})</span>
      </button>
      <button
        className={`${tabStyle} ${tab === "DONE" && active}`}
        onClick={handleTab}
      >
        DONE ({doneCount})
      </button>
    </div>
  );
}
export default Tabs;
