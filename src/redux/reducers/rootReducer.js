import { combineReducers } from "redux";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  // [app] key: value
  todos: todosReducer,
});

export default rootReducer;
