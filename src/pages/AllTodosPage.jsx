import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "../components/pagination/Pagination";
import paginate from "../utils/paginate";
import TodoItem from "../components/todos/TodoItem";

const AllTodosPage = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todosCount = todos.length;
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const pageChangeHandler = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const todoCrop = paginate(todos, currentPage, pageSize);

  return (
    <>
      {todosCount === 0 && (
        <h1 className="text-3xl text-center pt-20 text-blue-500">
          You have no tasks
        </h1>
      )}
      {todosCount !== 0 && (
        <div className=" flex flex-wrap pt-5 pb-20 gap-5 ">
          {todoCrop.map((todo) => (
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
        itemsCount={todosCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={pageChangeHandler}
        className=" text-center"
      />
    </>
  );
};

export default AllTodosPage;
