import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../index';

describe('ProfileInfo Component', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile userId="oooorx" userName="오래규" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    render(<Profile userId="oooorx" userName="오래규" />);
    screen.getByText('oooorx');
    screen.getByText('오래규');
    screen.getByText(/오/);
  });
});
