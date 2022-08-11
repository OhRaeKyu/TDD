import React, { useState, useCallback } from 'react';

import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

export default React.memo(function TodoApp() {
  const [todoId, setTodoId] = useState(3);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '오늘의 할일 1',
      done: true,
    },
    {
      id: 2,
      text: '오늘의 할일 2',
      done: false,
    },
  ]);

  const handleInsert = useCallback(
    (inputText) => {
      setTodoList([
        ...todoList,
        {
          id: todoId,
          text: inputText,
          done: false,
        },
      ]);

      setTodoId(todoId + 1);
    },
    [todoList, todoId]
  );

  const handleToggle = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm handleInsert={handleInsert} />
      <TodoList
        todoList={todoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </>
  );
});
