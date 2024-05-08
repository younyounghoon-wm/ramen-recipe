"use client";

import Header from "../entities/todo/ui/Header";
import Form from "../entities/todo/ui/Form";
import TodoList from "../entities/todo/ui/TodoList";
import Container from "../entities/todo/ui/Container";
import Tabs from "../entities/todo/ui/Tabs";

function TodoPage() {
  return (
    <Container>
      <Header />
      <Form />
      <Tabs />
      <TodoList />
    </Container>
  );
}
export default TodoPage;
