import React, { useState } from 'react';
import { View, Text, TextInput, Button,Switch, FlatList, StyleSheet, Alert } from 'react-native';

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState<string | null>(null);

  const addTask = () => {
    if (newTask.trim() === '') {
      setError('Pole zadania nie może być puste');
      return;
    }

    if (tasks.some((task) => task.description === newTask.trim())) {
      setError('Wprowadź unikalne zadanie');
      return;
    }

    setTasks([
      ...tasks,
      { id: tasks.length + 1, description: newTask.trim(), completed: false },
    ]);
    setNewTask('');
    setError(null);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moja Checklista</Text>
      <TextInput
        style={styles.input}
        placeholder="Dodaj nowe zadanie"
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor="#B0BEC5"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.addButton}>
        <Button title="Dodaj" onPress={addTask} color="#0288D1" />
      </View>
      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>Brak zadań</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.taskContainer, item.completed && styles.taskCompleted]}>
              <Text style={[styles.taskText, item.completed && styles.completed]}>
                {item.description}
              </Text>
              <View style={styles.controls}>
                <Button
                  title="Usuń"
                  onPress={() => removeTask(item.id)}
                  color="#D32F2F"
              />
              <Switch
                value={item.completed}
                onValueChange={() => toggleComplete(item.id)}
                thumbColor={item.completed ? "#4CAF50" : "#FF5722"}
                trackColor={{ false: "#FFCCBC", true: "#C8E6C9" }}
              />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECEFF1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#37474F',
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  addButton: {
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  taskCompleted: {
    backgroundColor: '#C8E6C9',
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    color: '#37474F',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Index;
