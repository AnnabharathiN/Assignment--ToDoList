import React, { useState } from 'react';
import TodoItem from './ToDoItem';

export default function TodoList({ todos, onToggleTask, onDeleteTask }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <div className="todo-list-section">
      <div className="card list-header">
        <h2>My ToDo List ({todos.length})</h2>

        <div className="filter-tabs">
          {['all', 'active', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`filter-btn ${filter === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state">No tasks to display.</div>
      ) : (
        <div className="items-stack">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}