import { useAtomValue } from "jotai";
import Todo from "../Todo";
import { container } from "./index.css";
import { todosAtom } from "../../atoms/todoAtoms";
import { tabAtoms } from "../../atoms/tabAtoms";

function TodoList() {
  const tab = useAtomValue(tabAtoms);
  const todos = useAtomValue(todosAtom);

  const renderTodos =
    tab === "TODO"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return (
    <div className={container}>
      {renderTodos.map((todo) => (
        <Todo key={todo._id} {...todo} />
      ))}
    </div>
  );
}
export default TodoList;
