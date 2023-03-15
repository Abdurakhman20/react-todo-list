const Form = () => {
  return (
    <form className="shadow-md rounded px-8 pt-6 pb-8 mb-20 mt-20  w-1/2 flex flex-col mx-auto">
      <h2 className="text-3xl text-center text-blue-500 mb-5">Create Todo</h2>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-blue-500" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="title"
        />
      </div>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-blue-500" htmlFor="deadline">
          Deadline
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          id="deadline"
        />
      </div>
      <div className="flex flex-col mb-4 w-full">
        <label className="pb-3 text-xl text-blue-500" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-500 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
        />
      </div>
    </form>
  );
};

export default Form;
