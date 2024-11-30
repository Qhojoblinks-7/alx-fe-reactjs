import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);

    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(3);
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    const addButton = screen.getByText(/Add Todo/i);
    fireEvent.click(addButton);

    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(4);
  });

  test('toggles the completion status of a todo', () => {
    render(<TodoList />);

    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);

    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(2);
  });
});
