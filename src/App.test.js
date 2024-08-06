// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About Me heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/About Me/i);
  expect(headingElement).toBeInTheDocument();
});
