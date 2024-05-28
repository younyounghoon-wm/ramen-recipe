"use client";

import Header from "../entities/todo/ui/Header";
import Form from "../entities/todo/ui/Form";
import TodoList from "../entities/todo/ui/TodoList";
import Container from "../entities/todo/ui/Container";
import Tabs from "../entities/todo/ui/Tabs";
import { useEffect } from "react";

function TodoPage() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      console.error("서비스 워커 미지원 브라우저입니다.");
      return;
    }

    const setServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.register(
          "./service-worker.js"
        );
        console.log("서비스 워커 등록 성공: ", registration);
        // 알림 권한 받기
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("알림 권한 허용");
        }
        if (permission === "denied") {
          console.log("알림 권한 거부");
        }
        return;
      }
    };

    setServiceWorker();
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
