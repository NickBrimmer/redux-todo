import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  let todos = useSelector((state) => state.todos);
  console.log("todos!!!!!!!! ", todos);
  return (
    <Fragment>
      <div>List of Todos...</div>
      {todos.map((todo) => {
        return <h4>{todo.name}</h4>;
      })}
    </Fragment>
  );
};

export default TodoList;
