import todos from "../data";

const todosReducer = (state = todos, action) => {
  let newState = [...state];

  switch (action.type) {
    case "ADD_TODO_SAGA":
      return newState.push(action.payload);

    case "DELETE_TODO_SAGA":
      return newState.filter((todo) => todo.id !== action.payload);

    default:
      return newState;
  }
};

export default todosReducer;
