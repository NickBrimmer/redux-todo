import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do App</h1>
        <TodoInput />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
