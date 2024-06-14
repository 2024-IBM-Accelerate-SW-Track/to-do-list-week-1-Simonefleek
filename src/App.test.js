import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './pages/Home';

test('add todo item', () => {
  render(<Home />);

  // Get the input field and button
  const input = screen.getByTestId('new-item-textfield').querySelector('input');
  const button = screen.getByTestId('new-item-button');

  // Add a new task
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  // Check if the new task is displayed
  const newTask = screen.getByText('New Task');
  expect(newTask).toBeInTheDocument();
});
