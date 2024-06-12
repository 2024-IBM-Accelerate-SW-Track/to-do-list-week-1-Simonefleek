import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("test that App component doesn't render duplicate tasks", () => {
  render(<App />, container);
  const input = screen.getByTestId('new-item-textfield');
  const button = screen.getByTestId('new-item-button');

  // Add a task
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

  // Attempt to add the same task again
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);

  // Check that the task appears only once
  const tasks = screen.getAllByText('Test Task');
  expect(tasks.length).toBe(1);
});

test("test that App component doesn't add a task without a name", () => {
  render(<App />, container);
  const button = screen.getByTestId('new-item-button');

  // Attempt to add a task without a name
  fireEvent.click(button);

  // Check that no task has been added
  const tasks = screen.queryAllByRole('listitem');
  expect(tasks.length).toBe(0);
});

test("test that App component doesn't add a task without a due date", () => {
  render(<App />, container);
  const input = screen.getByTestId('new-item-textfield');
  const button = screen.getByTestId('new-item-button');

  // Add a task without a due date
  fireEvent.change(input, { target: { value: 'Task Without Due Date' } });
  fireEvent.click(button);

  // Check that the task has not been added
  const tasks = screen.queryAllByRole('listitem');
  expect(tasks.length).toBe(0);
});

test('test that App component can delete a task through checkbox', () => {
  render(<App />, container);
  const input = screen.getByTestId('new-item-textfield');
  const button = screen.getByTestId('new-item-button');

  // Add a task
  fireEvent.change(input, { target: { value: 'Task to Delete' } });
  fireEvent.click(button);

  // Delete the task
  const checkbox = screen.getByLabelText('Delete Task to Delete');
  fireEvent.click(checkbox);

  // Check that the task has been removed
  const tasks = screen.queryAllByRole('listitem');
  expect(tasks.length).toBe(0);
});
