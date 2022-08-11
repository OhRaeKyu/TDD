import React, { useState, useCallback } from 'react';

export default function TodoForm({ handleInsert }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handlebutton = useCallback(() => {
    handleInsert(inputValue);
    setInputValue('');
  }, [handleInsert, inputValue]);

  return (
    <form data-testid="TodoForm">
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={handleInput}
      />
      <button type="button" onClick={handlebutton}>
        등록
      </button>
    </form>
  );
}
