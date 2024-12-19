
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react-native';
import App from  '../app/index';

describe('Checklista App', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Moja Checklista')).toBeTruthy();
  });

  it('allows adding a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Nowe zadanie');
    fireEvent.press(addButton);

    expect(screen.getByText('Nowe zadanie')).toBeTruthy();
  });

  it('allows deleting a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Zadanie do usunięcia');
    fireEvent.press(addButton);

    const deleteButton = screen.getByText('Usuń');
    fireEvent.press(deleteButton);

    expect(screen.queryByText('Zadanie do usunięcia')).toBeNull();
  });

  // Nowe testy

  it('should not display a deleted task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Test usunięcia');
    fireEvent.press(addButton);

    const deleteButton = screen.getByText('Usuń');
    fireEvent.press(deleteButton);

    expect(screen.queryByText('Test usunięcia')).toBeNull();
  });

  it('should display a message when there are no tasks', () => {
    render(<App />);
    expect(screen.getByText('Brak zadań')).toBeTruthy();
  });

  it('should display a task as completed when marked', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');
  
    fireEvent.changeText(input, 'Zadanie do oznaczenia');
    fireEvent.press(addButton);

    const markCompletedSwitch = screen.getByRole('switch');
  
    fireEvent(markCompletedSwitch, 'valueChange', true);

    expect(screen.getByText('Zadanie do oznaczenia')).toHaveStyle({ textDecorationLine: 'line-through' });
  });

  it('should not mark a task as completed if the button is not pressed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Nie zaznaczone zadanie');
    fireEvent.press(addButton);

    expect(screen.getByText('Nie zaznaczone zadanie')).not.toHaveStyle({ textDecorationLine: 'line-through' });
  });

  it('should have at least one task after adding a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Zadanie do dodania');
    fireEvent.press(addButton);

    expect(screen.getByText('Zadanie do dodania')).toBeTruthy();
  });

  it('should display the correct number of tasks', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Pierwsze zadanie');
    fireEvent.press(addButton);

    fireEvent.changeText(input, 'Drugie zadanie');
    fireEvent.press(addButton);

    expect(screen.getAllByText(/zadanie/).length).toBe(2);
  });

  it('should update task input correctly when text is changed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');

    fireEvent.changeText(input, 'Tekst testu');
    expect(input.props.value).toBe('Tekst testu');
  });
});
