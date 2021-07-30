import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/pages/Home';

describe('Home', () => {
  test('renders Home component', () => {
    const handleLogout = jest.fn();
    render(<Home handleLogout={handleLogout} />);
    expect(screen.getByText('Yay! You are logged in!')).toBeInTheDocument();
  });
});
