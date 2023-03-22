import TodoForm from "../components/todos/TodoForm";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center pt-20 text-blue-500">
        Todo List - Easy Way To Manage Your Project!
      </h1>
      <TodoForm />
    </div>
  );
};

export default HomePage;
