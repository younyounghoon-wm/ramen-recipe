import Image from "next/image";
import CheckDone from "../../../../../public/checkDone.svg";
import CheckEmpty from "../../../../../public/checkEmpty.svg";
import Delete from "../../../../../public/delete.svg";
import {
  completedStyle,
  createdAtStyle,
  textStyle,
  todoStyle,
} from "./index.css";
import { ITodo } from "../../../../../types";
import { useAtom } from "jotai";
import { todosAtom } from "../../atoms/todoAtoms";
import { removeParentheses } from "../../utils";

function Todo({ _id, title, completed, createAt }: ITodo) {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleToggle = () => {
    const newTodos = todos.map((todo) =>
      todo._id === _id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo._id !== _id);
    setTodos(newTodos);
  };

  return (
    <div className={todoStyle}>
      <Image
        src={completed ? CheckDone : CheckEmpty}
        alt="checkStatus"
        width={24}
        height={24}
        onClick={handleToggle}
      />
      <div className={`${textStyle} ${completed && completedStyle}`}>
        {title}
        <span className={createdAtStyle}>
          {createAt ? removeParentheses(createAt) : ""}
        </span>
      </div>
      <Image
        src={Delete}
        alt="checkDone"
        width={24}
        height={24}
        onClick={handleDelete}
      />
    </div>
  );
}
export default Todo;
