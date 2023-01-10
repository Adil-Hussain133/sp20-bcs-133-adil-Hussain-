import { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInput;
