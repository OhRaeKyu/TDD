import { render, screen } from '@testing-library/react';
import TodoList from '../index';

describe('TodoList Component', () => {
  const dummyData = [
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
  ];

  it('renders todo list properly', () => {
    render(<TodoList todoList={dummyData} />);

    const elementList = [];

    for (let i = 0; i < dummyData.length; i++) {
      elementList.push(screen.getByText(dummyData[i].text));
      expect(elementList[i]).toBeInTheDocument();
    }
  });
});
