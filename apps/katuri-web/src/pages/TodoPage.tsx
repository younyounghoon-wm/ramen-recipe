"use client";

import Header from "../entities/todo/ui/Header";
import Form from "../entities/todo/ui/Form";
import TodoList from "../entities/todo/ui/TodoList";
import Container from "../entities/todo/ui/Container";
import Tabs from "../entities/todo/ui/Tabs";
import { useEffect } from "react";

function TodoPage() {
  useEffect(() => {
    location.href = "https://elfoxero.github.io/html5notifications/";
  }, []);

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
