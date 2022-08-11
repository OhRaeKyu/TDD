import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../index';

describe('TodoForm Component', () => {
  const inputValue = '오늘의 할일';

  const initSetting = (props = {}) => {
    render(<TodoForm {...props} />);
    const inputElement = screen.getByPlaceholderText('할 일을 입력하세요.');
    const buttonElement = screen.getByText('등록');

    return {
      inputElement,
      buttonElement,
    };
  };

  it('has input & button', () => {
    const { inputElement, buttonElement } = initSetting();

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('change input', () => {
    const { inputElement } = initSetting();

    fireEvent.change(inputElement, {
      target: {
        value: inputValue,
      },
    });

    expect(inputElement).toHaveAttribute('value', inputValue);
  });

  it('click insert button & clear input', () => {
    const handleInsert = jest.fn();
    const { inputElement, buttonElement } = initSetting({ handleInsert });

    fireEvent.change(inputElement, {
      target: {
        value: inputValue,
      },
    });
    fireEvent.click(buttonElement);

    expect(handleInsert).toBeCalledWith(inputValue);
    expect(inputElement).toHaveAttribute('value', '');
  });
});
