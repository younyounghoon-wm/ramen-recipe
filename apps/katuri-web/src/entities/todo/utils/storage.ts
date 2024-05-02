import { ITodo } from "../../../../types";

const TODOS_STORAGE_KEY = "TODOS_STORAGE_KEY";

export const getTodoHistory = (): ITodo[] => {
  if (typeof window === "undefined") return [];

  const history = localStorage.getItem(TODOS_STORAGE_KEY);
  return history ? JSON.parse(history) : [];
};

export const setTodoHistory = (todos: ITodo[]) => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
};
