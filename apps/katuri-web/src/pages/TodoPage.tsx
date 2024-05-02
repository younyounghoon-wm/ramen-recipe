import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BiCheckSquare, BiCheckbox } from "react-icons/bi";
import { ITodo } from "../../types";
import { todoStyle } from "../../app/template.css";
import { getTodoHistory, setTodoHistory } from "../entities/todo/utils/storage";

function TodoPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>(getTodoHistory());

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text) return alert("할일을 입력해주세요.");

    const newTodos = [
      ...todos,
      {
        _id: Math.random().toString(),
        title: text,
        completed: false,
      },
    ];

    setTodos(newTodos);
    setTodoHistory(newTodos);

    setText("");
  };

  const toggle = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
    setTodoHistory(newTodos);
  };

  const deleteAll = () => {
    setTodos([]);
    setTodoHistory([]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
    setTodoHistory(newTodos);
  };

  const handleText = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  return (
    <main>
      <h2>
        {year}년 {month}월 {day}일 할 일
      </h2>
      <form onSubmit={addTodo}>
        <input onChange={handleText} value={text} />
        <button type="submit">할일 생성</button>
      </form>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          deleteAll();
        }}
      >
        전체 삭제
      </button>
      <hr />
      <ul>
        {todos?.map(({ _id, title, completed }) => (
          <div key={_id} className={todoStyle}>
            <div onClick={() => toggle(_id)}>
              {completed ? <BiCheckSquare /> : <BiCheckbox />}
            </div>
            <li>{title}</li>
            <button
              onClick={(e) => {
                deleteTodo(_id);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </ul>
    </main>
  );
}
export default TodoPage;
