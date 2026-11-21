import React from 'react';

export default function TodoItem({ todo, onToggleTask, onDeleteTask }) {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      {/* Task Content */}
      <div className="todo-content">
        <h3 className={`todo-title ${todo.isCompleted ? 'strikethrough' : ''}`}>
          {todo.title}
        </h3>

        {todo.description && (
          <p
            className={`todo-description ${
              todo.isCompleted ? 'strikethrough' : ''
            }`}
          >
            {todo.description}
          </p>
        )}
      </div>

      {/* Action Buttons: Done / Redo & Delete */}
      <div className="todo-actions">
        <button
          onClick={() => onToggleTask(todo.id)}
          className={`btn ${todo.isCompleted ? 'btn-redo' : 'btn-done'}`}
        >
          {todo.isCompleted ? 'Redo' : 'Done'}
        </button>

        <button
          onClick={() => onDeleteTask(todo.id)}
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}