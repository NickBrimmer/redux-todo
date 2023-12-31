export const addTodos = (todo) => ({
  type: "ADD_TODOS",
  payload: todo,
});

export const deleteTodos = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const updateTodos = (todo) => ({
  type: "UPDATE_TODO",
  payload: todo,
});

export const addTodoSaga = (todo) => ({
  type: "ADD_TODO_SAGA",
  payload: todo,
});

export const deleteTodoSaga = (todo) => ({
  type: "DELETE_TODO_SAGA",
  payload: todo,
});

export const updateTodoSaga = (todo) => ({
  type: "UPDATE_TODO_SAGA",
  payload: todo,
});
