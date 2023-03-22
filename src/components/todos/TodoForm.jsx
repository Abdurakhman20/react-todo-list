import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/slices/todo-slice";
import Form from "../UI/Form";

const TodoForm = () => {
  const dispatchFunc = useDispatch();

  const addTodoHandler = (todoArr) => {
    console.log(todoArr);
    dispatchFunc(
      todoActions.addTodo({
        id: todoArr.id,
        isCompleted: todoArr.isCompleted,
        title: todoArr.title,
        deadline: todoArr.deadline,
        description: todoArr.description,
      })
    );
  };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const titleIsValid = title.trim() !== "";
  const dateIsValid = date.trim() !== "";
  const descriptionIsValid = description.trim() !== "";

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const descriptionChangeInputHandler = (event) => {
    setDescription(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!titleIsValid || !dateIsValid || !descriptionIsValid) {
      return;
    }
    const todo = {
      id: Math.random(),
      isCompleted: false,
      title: title,
      deadline: date,
      description: description,
    };
    addTodoHandler(todo);
    setTitle("");
    setDate("");
    setDescription("");
  };
  return (
    <Form
      title={title}
      date={date}
      description={description}
      onTitleInputChange={titleInputChangeHandler}
      onDateInputChange={dateInputChangeHandler}
      onDescriptionInputChange={descriptionChangeInputHandler}
      onFormSubmit={formSubmitHandler}
    />
  );
};

export default TodoForm;
