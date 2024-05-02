"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import { ITodo } from "../types";
import { todoStyle } from "./template.css";
import {
  useAddTodo,
  useDeleteAll,
  useDeleteTodo,
  useTodos,
  useToggleTodo,
} from "../queries/todo";
import Axios from "../networks/axios";

function Page() {
  const { data: todos } = useTodos();
  const { mutate: addTodoMutate } = useAddTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: deleteAll } = useDeleteAll();
  const { mutate: toggleMutate } = useToggleTodo();

  const inputRef = useRef<HTMLInputElement>(null);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    console.log("addTodo");
    event.preventDefault();

    if (!inputRef.current?.value) return;

    addTodoMutate(inputRef.current.value);

    inputRef.current.value = "";
  };

  const toggleCheck = async (id: string) => {
    toggleMutate(id);
  };

  return (
    <main>
      <h2>
        {year}년 {month}월 {day}일 할 일
      </h2>
      <form onSubmit={addTodo}>
        <input ref={inputRef} />
        <button>할일 생성</button>
        <button onClick={() => deleteAll()}>전체 삭제</button>
      </form>
      <hr />
      <ul>
        {todos?.map(({ _id, title, completed }) => (
          <div key={_id} className={todoStyle}>
            <div onClick={() => toggleCheck(_id)}>
              {completed ? (
                <MdOutlineCheckBox />
              ) : (
                <MdOutlineCheckBoxOutlineBlank />
              )}
            </div>
            <li>{title}</li>
            <button onClick={() => deleteTodo(_id)}>삭제</button>
          </div>
        ))}
      </ul>
    </main>
  );
}
export default Page;
