import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import TodoDetail from "./TodoDetail";

const TodoList = () => {
  let todos = useSelector((state) => state.todos);
  console.log("todos!!!!!!!! ", todos);
  return (
    <Fragment>
      <div>List of Todos...</div>
      {todos.map((todo) => {
        return <TodoDetail todo={todo} key={todo.id} />;
      })}
    </Fragment>
  );
};

export default TodoList;
