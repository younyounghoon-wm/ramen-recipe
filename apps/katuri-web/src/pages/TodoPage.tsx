"use client";
import { container, todoPageStyle } from "./TodoPage.css";
import Header from "../entities/todo/ui/Header";
import Form from "../entities/todo/ui/Form";
import TodoList from "../entities/todo/ui/TodoList";

function TodoPage() {
  return (
    <div className={container}>
      <main className={todoPageStyle}>
        <Header />
        <Form />
        <TodoList />
      </main>
    </div>
  );
}
export default TodoPage;
