const Form = (props) => {
  const {
    title,
    date,
    description,
    onTitleInputChange,
    onDateInputChange,
    onDescriptionInputChange,
    onFormSubmit,
  } = props;
  return (
    <form
      onSubmit={onFormSubmit}
      className="shadow-md bg-blue-500   rounded px-8 pt-6 pb-8 mb-20 mt-20  w-1/2 flex flex-col mx-auto items-center"
    >
      <h2 className="text-3xl text-center text-amber-50 mb-5">Create Todo</h2>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-amber-50 " htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
          onChange={onTitleInputChange}
          value={title}
        />
      </div>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-amber-50 " htmlFor="deadline">
          Deadline
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          id="deadline"
          min="2000-01-01"
          onChange={onDateInputChange}
          value={date}
        />
      </div>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-amber-50 " htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          onChange={onDescriptionInputChange}
          value={description}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-amber-50  hover:bg-blue-800 hover:text-amber-50 transition-colors ease-in-out delay-100 text-blue-500 font-bold py-2 px-12 rounded "
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
