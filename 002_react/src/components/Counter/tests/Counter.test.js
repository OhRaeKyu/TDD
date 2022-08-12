import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../index';

describe('Counter Component', () => {
  it('matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has a number and two buttons', () => {
    render(<Counter />);

    const number = screen.getByText('0');
    const increaseBtn = screen.getByText('+');
    const decreaseBtn = screen.getByText('-');

    expect(number).toBeInTheDocument();
    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
  });

  it('increase', () => {
    render(<Counter />);

    const number = screen.getByText('0');
    const increaseBtn = screen.getByText('+');

    fireEvent.click(increaseBtn);
    expect(number).toHaveTextContent('1');
    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    expect(number).toHaveTextContent('3');
  });

  it('decrease', () => {
    render(<Counter />);

    const number = screen.getByText('0');
    const decreaseBtn = screen.getByText('-');

    fireEvent.click(decreaseBtn);
    expect(number).toHaveTextContent('-1');
    fireEvent.click(decreaseBtn);
    fireEvent.click(decreaseBtn);
    expect(number).toHaveTextContent('-3');
  });
});
