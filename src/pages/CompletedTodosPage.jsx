import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../components/pagination/Pagination";
import paginate from "../utils/paginate";
import TodoItem from "../components/todos/TodoItem";

const CompletedTodosPage = () => {
  const completedTodos = useSelector((state) => state.todo.completedTodos);
  const completedTodosCount = completedTodos.length;
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const pageChangeHandler = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const completedTodoCrop = paginate(completedTodos, currentPage, pageSize);

  return (
    <>
      {completedTodosCount === 0 && (
        <h1 className="text-3xl text-center pt-20 text-blue-500">
          You have no completed todos
        </h1>
      )}
      {completedTodosCount !== 0 && (
        <div className=" flex flex-wrap pt-5 pb-20 gap-5 ">
          {completedTodoCrop.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              title={todo.title}
              deadline={todo.deadline}
              description={todo.description}
            />
          ))}
        </div>
      )}
      <Pagination
        itemsCount={completedTodosCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={pageChangeHandler}
        className=" text-center"
      />
    </>
  );
};

export default CompletedTodosPage;
