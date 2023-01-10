import React from "react";

export const TodoItem = ({ item, index, deleteTodoItem, updateTodoItem }) => {
  return (
    <div
      className="todo-list"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <li>{item.todo}</li>
      <div
        className="btns"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <button
          onClick={() => updateTodoItem(index)}
          style={{
            background: "green",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Update
        </button>
        <button
          onClick={() => deleteTodoItem(index)}
          style={{
            background: "red",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};
