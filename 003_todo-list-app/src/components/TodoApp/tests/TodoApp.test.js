import { fireEvent, render, screen } from '@testing-library/react';
import TodoApp from '../index';

describe('TodoApp Component', () => {
  it('renders TodoForm & TodoList', () => {
    render(<TodoApp />);

    const todoFormComponent = screen.getByTestId('TodoForm');
    const todoListComponent = screen.getByTestId('TodoList');

    expect(todoFormComponent).toBeInTheDocument();
    expect(todoListComponent).toBeInTheDocument();
  });

  it('renders two defaults todo list', () => {
    render(<TodoApp />);

    const elementList = [
      screen.getByText('오늘의 할일 1'),
      screen.getByText('오늘의 할일 2'),
    ];

    expect(elementList[0]).toBeInTheDocument();
    expect(elementList[1]).toBeInTheDocument();
  });

  it('insert new todo data', () => {
    render(<TodoApp />);

    const inputElement = screen.getByPlaceholderText('할 일을 입력하세요.');
    const buttonElement = screen.getByText('등록');

    fireEvent.change(inputElement, { target: { value: '새로운 할일' } });
    fireEvent.click(buttonElement);

    const newTodoData = screen.getByText('새로운 할일');

    expect(newTodoData).toBeInTheDocument();
  });

  it('toggle todo data', () => {
    render(<TodoApp />);

    const todoData = screen.getByText('오늘의 할일 1');

    expect(todoData).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoData);
    expect(todoData).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoData);
    expect(todoData).toHaveStyle('text-decoration: line-through');
  });

  it('delete todo data', () => {
    render(<TodoApp />);

    const todoData = screen.getByText('오늘의 할일 1');
    const deleteBtn = screen.getAllByText('삭제')[0];

    expect(todoData).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(todoData).not.toBeInTheDocument();
  });
});
