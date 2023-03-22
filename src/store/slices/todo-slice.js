import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialTodoState = {
  todos: [],
  completedTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;

      state.todos.push({
        id: newTodo.id,
        isCompleted: newTodo.isCompleted,
        title: newTodo.title,
        deadline: newTodo.deadline,
        description: newTodo.description,
      });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodos(state, action) {
      state.todos = action.payload.todos;
    },
    updateCompletedTodos(state, action) {
      state.completedTodos = action.payload.completedTodos;
    },
    completeTodo(state, action) {
      const id = action.payload;
      state.completedTodos = state.todos.filter((todo) => todo.id === id);
      state.completedTodos.forEach((todo) => (todo.isCompleted = true));
    },
  },
});

export const sendTodosData = (todosData, URL) => {
  return async () => {
    const sendHttpRequest = async () => {
      await axios.put(URL, todosData);
    };
    try {
      sendHttpRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTodosData = (URL) => {
  return async (dispatchAction) => {
    const getHttpRequest = async () => {
      const response = await axios.get(URL);
      return response.data;
    };
    try {
      const todosData = await getHttpRequest();
      dispatchAction(
        todoSlice.actions.updateTodos({
          todos: todosData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompletedTodosData = (URL) => {
  return async (dispatchAction) => {
    const getHttpRequest = async () => {
      const response = await axios.get(URL);
      return response.data;
    };
    try {
      const completedTodosData = await getHttpRequest();
      dispatchAction(
        todoSlice.actions.updateCompletedTodos({
          completedTodos: completedTodosData || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const todoActions = todoSlice.actions;
export default todoSlice;
