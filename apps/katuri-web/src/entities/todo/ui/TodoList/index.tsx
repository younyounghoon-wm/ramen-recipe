import { useAtomValue } from "jotai";
import Todo from "../Todo";
import { container } from "./index.css";
import { todosAtom } from "../../atoms/todoAtoms";

function TodoList() {
  const todos = useAtomValue(todosAtom);

  return (
    <div className={container}>
      {todos.map((todo) => (
        <Todo key={todo._id} {...todo} />
      ))}
    </div>
  );
}
export default TodoList;
