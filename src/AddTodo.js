import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoProvider';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTodo(task);
    setTask('');
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
