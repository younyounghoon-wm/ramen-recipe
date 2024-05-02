import { useMutation, useQuery } from "@tanstack/react-query";
import Axios from "../networks/axios";
import { ITodo } from "../types";
import { queryClient } from "../providers/QueryProvider";

const QUERY_KEYS = {
  GET_TODOS: "GET_TODOS",
  ADD_TODO: "ADD_TODO",
  DELETE_ALL: "DELETE_ALL",
  TOGGLE_TODO: "TOGGLE_TODO",
} as const;

export const useTodos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_TODOS],
    queryFn: async () => {
      const response = await Axios.get<ITodo[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/todos`
      );
      return response.data;
    },
  });
};

export const useAddTodo = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TODO],
    mutationFn: async (title: string) => {
      const response = await Axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/todos`,
        {
          title,
          completed: false,
        }
      );
      return response.data;
    },
    onMutate: async (title: string) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });

      const previousTodos = queryClient.getQueryData<ITodo[]>([
        QUERY_KEYS.GET_TODOS,
      ]);

      queryClient.setQueryData<ITodo[]>([QUERY_KEYS.GET_TODOS], (old) => {
        return [
          ...old,
          {
            _id: Math.random().toString(),
            title,
            completed: false,
          },
        ];
      });

      return { previousTodos };
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<ITodo[]>(
        [QUERY_KEYS.GET_TODOS],
        context?.previousTodos
      );
    },
  });
};

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      await Axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
        data: {
          id,
        },
      });
    },
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });

      const previousTodos = queryClient.getQueryData<ITodo[]>([
        QUERY_KEYS.GET_TODOS,
      ]);

      queryClient.setQueryData<ITodo[]>([QUERY_KEYS.GET_TODOS], (old) => {
        return old.filter((todo) => todo._id !== id);
      });

      return { previousTodos };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<ITodo[]>(
        [QUERY_KEYS.GET_TODOS],
        context?.previousTodos
      );
    },
  });
};

export const useDeleteAll = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_ALL],
    mutationFn: async () => {
      const response = await Axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/todos/all`
      );
      return response.data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });

      const previousTodos = queryClient.getQueryData<ITodo[]>([
        QUERY_KEYS.GET_TODOS,
      ]);

      queryClient.setQueryData<ITodo[]>([QUERY_KEYS.GET_TODOS], []);

      return { previousTodos };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<ITodo[]>(
        [QUERY_KEYS.GET_TODOS],
        context?.previousTodos
      );
    },
  });
};

export const useToggleTodo = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.TOGGLE_TODO],
    mutationFn: async (id: string) => {
      await Axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
        id,
      });
    },
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.GET_TODOS],
      });

      const previousTodos = queryClient.getQueryData<ITodo[]>([
        QUERY_KEYS.GET_TODOS,
      ]);

      queryClient.setQueryData<ITodo[]>([QUERY_KEYS.GET_TODOS], (old) => {
        return old.map((todo) => {
          if (todo._id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
      });

      return { previousTodos };
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData<ITodo[]>(
        [QUERY_KEYS.GET_TODOS],
        context?.previousTodos
      );
    },
  });
};
