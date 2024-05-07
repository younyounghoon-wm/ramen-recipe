"use client";

import Header from "../entities/todo/ui/Header";
import Form from "../entities/todo/ui/Form";
import TodoList from "../entities/todo/ui/TodoList";
import Container from "../entities/todo/ui/Container";

function TodoPage() {
  return (
    <Container>
      <Header />
      <Form />
      <TodoList />
    </Container>
  );
}
export default TodoPage;
