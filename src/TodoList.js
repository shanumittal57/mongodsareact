import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoProvider';

const TodoList = ({todos}) => {
 // const { todos } = useContext(TodoContext);
  console.log('List:', todos)
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks to display.</p>
      )}
    </ul>
  );
};

export default TodoList;
