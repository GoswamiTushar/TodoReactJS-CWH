import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <h4 className="text-center my-4">
        <strong>{todo.sno})</strong> {todo.title}
      </h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-danger btn-sm"
        key={todo.sno}
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
