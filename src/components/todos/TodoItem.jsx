import { todoActions } from "../../store/slices/todo-slice";
import { useSelector, useDispatch } from "react-redux";

const TodoItem = (props) => {
  const { id, isCompleted, title, deadline, description } = props;
  const completedTodos = useSelector((state) => state.todo.completedTodos);
  const dispatchAction = useDispatch();
  const deleteTodoHandler = () => {
    dispatchAction(todoActions.deleteTodo(id));
  };
  const completeTodoHandler = () => {
    dispatchAction(todoActions.completeTodo(id));
  };
  console.log(completedTodos);
  return (
    <div
      className={` text-amber-50  w-80  p-5 rounded-xl text-center ${
        isCompleted ? " bg-lime-500" : " bg-blue-500"
      }`}
    >
      <h1 className="border-b-2  border-fuchsia-800 mb-2 text-xl ">{title}</h1>
      <p className="text-lg border-b-2 border-fuchsia-800">{deadline}</p>
      <p className="text-lg border-b-2  border-fuchsia-800">{description}</p>
      <div className=" flex gap-2 justify-end p-3">
        <button onClick={completeTodoHandler}>
          <img src="images/icon-done.svg" alt="done" />
        </button>
        <button>
          <img src="images/icon-edit.svg" alt="edit" />
        </button>
        <button onClick={deleteTodoHandler}>
          <img src="images/icon-trash.svg" alt="trash" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
