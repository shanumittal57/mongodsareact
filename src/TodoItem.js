import React, {useContext} from 'react';
import { TodoContext } from './TodoProvider';

const TodoItem = ({todo}) => {
  const { toggleComplete, deleteTodo } = useContext(TodoContext);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.task}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        &#10060;
      </button>
    </li>
  );
};

export default TodoItem;
