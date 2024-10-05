import './App.css';
import './TodoApp.css';
import { TodoContext } from './TodoProvider';
import AddTodo from './AddTodo';
import Filter from "./Filter";
import TodoList from "./TodoList";
import React, { useContext } from 'react';

function App() {
  const { filteredTodos } = useContext(TodoContext);
  console.log('App Initial', filteredTodos)
  return (
    <div className="todo-app">
      <div>
        <h1>To-Do List</h1>
        <AddTodo />
        <Filter />
        <TodoList todos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
