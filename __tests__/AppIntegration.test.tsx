import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import App from '../app/index';

describe('Checklista App Integration Tests', () => {
  it('renders the main header correctly', () => {
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

  it('should display an error when input is empty and trying to add a task', () => {
    render(<App />);
    const addButton = screen.getByText('Dodaj');

    fireEvent.press(addButton);
    expect(screen.getByText('Pole zadania nie może być puste')).toBeTruthy();
  });

  it('allows deleting a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Zadanie do usunięcia');
    fireEvent.press(addButton);
    expect(screen.getByText('Zadanie do usunięcia')).toBeTruthy();

    const deleteButton = screen.getByText('Usuń');
    fireEvent.press(deleteButton);
    expect(screen.queryByText('Zadanie do usunięcia')).toBeNull();
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

    fireEvent.changeText(input, 'Nieoznaczone zadanie');
    fireEvent.press(addButton);

    expect(screen.getByText('Nieoznaczone zadanie')).not.toHaveStyle({ textDecorationLine: 'line-through' });
  });

  it('should display the correct number of tasks after adding a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');

    fireEvent.changeText(input, 'Zadanie 1');
    fireEvent.press(addButton);
    fireEvent.changeText(input, 'Zadanie 2');
    fireEvent.press(addButton);

    expect(screen.getAllByText(/Zadanie/)).toHaveLength(2);
  });

  it('should update the task input correctly when text is changed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');

    fireEvent.changeText(input, 'Testowe zadanie');
    expect(input.props.value).toBe('Testowe zadanie');
  });

  it('should not allow a task with duplicate text to be added', () => {
    render(<App/>);
    const input = screen.getByPlaceholderText('Dodaj nowe zadanie');
    const addButton = screen.getByText('Dodaj');
    fireEvent.changeText(input, 'Unikalne zadanie');
    fireEvent.press(addButton);

    expect(screen.getByText('Unikalne zadanie')).toBeTruthy();
    fireEvent.changeText(input, 'Unikalne zadanie');
    fireEvent.press(addButton);
  
    const tasks = screen.queryAllByText('Unikalne zadanie');
    expect(tasks.length).toBe(1); 
    expect(screen.getByText('Wprowadź unikalne zadanie')).toBeTruthy();
  });  
});
