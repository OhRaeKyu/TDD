import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../index';

describe('TodoItem Component', () => {
  const dummyData = {
    id: 1,
    text: '오늘의 할일',
    done: false,
  };

  const initSetting = (props = {}) => {
    const initProps = { todoData: dummyData };
    const realTodoData = props.todoData || initProps.todoData;

    render(<TodoItem {...initProps} {...props} />);

    const spanElement = screen.getByText(realTodoData.text);
    const buttonElement = screen.getByText('삭제');

    return {
      spanElement,
      buttonElement,
    };
  };

  it('has span & button', () => {
    const { spanElement, buttonElement } = initSetting();

    expect(spanElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('has style line-through on span when done is true', () => {
    const { spanElement } = initSetting({
      todoData: { ...dummyData, done: true },
    });

    expect(spanElement).toHaveStyle('text-decoration: line-through');
  });

  it('has not style line-through on span when done is false', () => {
    const { spanElement } = initSetting({
      todoData: { ...dummyData, done: false },
    });

    expect(spanElement).not.toHaveStyle('text-decoration: line-through');
  });

  it('click span element', () => {
    const handleToggle = jest.fn();
    const { spanElement } = initSetting({ handleToggle });

    fireEvent.click(spanElement);
    expect(handleToggle).toBeCalledWith(dummyData.id);
  });

  it('click button element', () => {
    const handleDelete = jest.fn();
    const { buttonElement } = initSetting({ handleDelete });

    fireEvent.click(buttonElement);
    expect(handleDelete).toBeCalledWith(dummyData.id);
  });
});
