import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AllTodosPage from "./pages/AllTodosPage";
import ActiveTodosPage from "./pages/ActiveTodosPage";
import CompletedTodosPage from "./pages/CompletedTodosPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendTodosData,
  getTodosData,
  getCompletedTodosData,
} from "./store/slices/todo-slice";

let isInitialRunning = true;
const TODOS_URL =
  "https://todo-list-690fb-default-rtdb.firebaseio.com/todos.json";
const COMPLETED_TODOS_URL =
  "https://todo-list-690fb-default-rtdb.firebaseio.com/completedTodos.json";

function App() {
  const dispatchAction = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = useSelector((state) => state.todo.completedTodos);

  useEffect(() => {
    dispatchAction(getTodosData(TODOS_URL));
  }, []);

  useEffect(() => {
    dispatchAction(getCompletedTodosData(COMPLETED_TODOS_URL));
  }, []);

  useEffect(() => {
    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }
    dispatchAction(sendTodosData(todos, TODOS_URL));
  }, [todos]);

  useEffect(() => {
    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }
    dispatchAction(sendTodosData(completedTodos, COMPLETED_TODOS_URL));
  }, [completedTodos]);

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/all-todos" element={<AllTodosPage />} />
        <Route path="/active-todos" element={<ActiveTodosPage />} />
        <Route path="/completed-todos" element={<CompletedTodosPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
