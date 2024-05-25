import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoController,
  generateError,
} from "../ReduxStore/Features/demoSlice";
import { RootState } from "../ReduxStore/reducers";

function App() {
  const [todo, setTodo] = useState<string | null>(null);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todo);
  const error = useSelector((state: RootState) => state.todos.error);

  const createTodo = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo || todo.length === 0) {
      dispatch(generateError("Error : Todo field required"))
      setTimeout(() => dispatch(generateError(null)), 2000);
      return;
    }
    dispatch(addTodoController(todo));
  };

  return (
    <main className="app">
      <div className="input-container">
        <div className="input">
          <input
            type="text"
            name="todo"
            placeholder="Enter todo"
            onChange={createTodo}
          />
        </div>
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="todos-list">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.label}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
