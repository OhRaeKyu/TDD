import { screen, fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../../utils/renderWithRedux';
import Counter from '../index';

describe('Counter Component', () => {
  it('has number & two button', () => {
    renderWithRedux(<Counter />);

    const number = screen.getByText('0');
    const increaseBtn = screen.getByText('+');
    const decreaseBtn = screen.getByText('-');

    expect(number).toBeInTheDocument();
    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
  });

  it('click increase button properly', () => {
    renderWithRedux(<Counter />);

    const number = screen.getByText('0');
    const increaseBtn = screen.getByText('+');

    expect(number).toHaveTextContent('0');
    fireEvent.click(increaseBtn);
    expect(number).toHaveTextContent('1');
  });

  it('click decrease button properly', () => {
    renderWithRedux(<Counter />);

    const number = screen.getByText('0');
    const decreaseBtn = screen.getByText('-');

    expect(number).toHaveTextContent('0');
    fireEvent.click(decreaseBtn);
    expect(number).toHaveTextContent('-1');
  });
});
