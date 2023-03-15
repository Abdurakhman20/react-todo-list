import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AllTodosPage from "./pages/AllTodosPage";
import ActiveTodosPage from "./pages/ActiveTodosPage";
import CompletedTodosPage from "./pages/CompletedTodosPage";
import { Route, Routes } from "react-router-dom";

function App() {
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
