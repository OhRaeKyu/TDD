import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todoList, handleToggle, handleDelete }) {
  return (
    <ul data-testid="TodoList">
      {todoList.map((item) => (
        <TodoItem
          todoData={item}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
}
