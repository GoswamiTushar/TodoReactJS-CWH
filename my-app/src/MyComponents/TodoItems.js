import React from "react";
import { Todo } from "./Todo";

export const TodoItems = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
       return <Todo todo={todo} onDelete = {props.onDelete}/> 
      })}
    </div>
  );
};
