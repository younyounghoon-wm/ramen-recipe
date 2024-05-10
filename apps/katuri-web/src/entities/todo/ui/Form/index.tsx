import { ChangeEvent, useState } from "react";
import Input from "../Input";
import { formStyle } from "./index.css";
import Image from "next/image";
import { useAtom } from "jotai";
import { todosAtom } from "../../atoms/todoAtoms";
import useTodayDate from "../../hooks/useTodayDate";

function Form() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);
  const { month, date, day } = useTodayDate();

  const handleText = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  const addTodo = () => {
    if (text === "") return;

    setTodos([
      ...todos,
      {
        _id: Math.random().toString(),
        title: `${text}`,
        createAt: `(${month}.${date}, ${day})`,
        completed: false,
      },
    ]);

    setText("");
  };

  return (
    <form
      className={formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
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
