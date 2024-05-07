import { ChangeEvent, useState } from "react";
import Input from "../Input";
import { formStyle } from "./index.css";
import Image from "next/image";
import { useAtom } from "jotai";
import { todosAtom } from "../../atoms/todoAtoms";

function Form() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);

  const handleText = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        _id: Math.random().toString(),
        title: text,
        completed: false,
      },
    ]);

    setText("");
  };

  return (
    <form className={formStyle}>
      <Input text={text} onChange={handleText} />
      <Image
        src="/add.svg"
        alt="addIcon"
        width={24}
        height={24}
        onClick={addTodo}
      />
    </form>
  );
}
export default Form;
