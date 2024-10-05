import React, { useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

const TodoApp = ({children}) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('all');

  // Load tasks on initial render from localStorage
  useEffect(() => {
    console.log(localStorage.getItem('todos'))
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save tasks to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    console.log('Filter data:', filter)
    if (filter === 'completed') {
      return todo.completed;
    }
    if (filter === 'pending') {
      console.log('pending')
      return !todo.completed;
    }
    return true; // all tasks
  });

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, deleteTodo, filteredTodos, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoApp;
