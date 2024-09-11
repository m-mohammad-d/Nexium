import React, { useState, useEffect } from "react";
import DraggableWindow from "./DraggableWindow";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <DraggableWindow title="todoList">
      <div className="h-full bg-gray-900 text-white flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="w-full max-w-md bg-gray-800 p-4 rounded shadow">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-700 text-white"
            placeholder="Add a new todo"
          />
          <button
            onClick={addTodo}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add Todo
          </button>
          <ul className="mt-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-2 border-b border-gray-700"
              >
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-400 hover:text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DraggableWindow>
  );
};

export default TodoList;
