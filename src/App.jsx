import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './Components/ToDoForm';
import TodoList from './Components/ToDoList';
import TodoStats from './Components/ToDoStats';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('assignment_todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('assignment_todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new task
  const handleAddTask = ({ title, description }) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Toggle completed state (Done <-> Redo)
  const handleToggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Permanently delete a task
  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all tasks
  const handleClearAll = () => {
    setTodos([]);
  };

  const completedCount = todos.filter((t) => t.isCompleted).length;

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <header className="app-header">
          <h1>Assignment 1 — ToDo List</h1>
          <p>
            Manage your tasks with strikethrough completion, redo, and delete actions.
          </p>
        </header>

        <TodoStats
          totalCount={todos.length}
          completedCount={completedCount}
          onClearAll={handleClearAll}
        />

        <div className="main-grid">
          <TodoForm onAddTask={handleAddTask} />

          <TodoList
            todos={todos}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}
