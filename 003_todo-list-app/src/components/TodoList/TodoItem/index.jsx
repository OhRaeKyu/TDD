import React, { useCallback } from 'react';

export default function TodoItem({ todoData, handleToggle, handleDelete }) {
  const { id, text, done } = todoData;
  const onToggle = useCallback(() => handleToggle(id), [id, handleToggle]);
  const onDelete = useCallback(() => handleDelete(id), [id, handleDelete]);

  return (
    <li>
      <span
        style={{ textDecoration: done ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {text}
      </span>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
    </li>
  );
}
