import React, { useState } from 'react';

export default function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Task Name is required before adding.');
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="card todo-form">
      <h2>Add New Task</h2>

      {error && <p className="error-alert">{error}</p>}

      <div className="form-group">
        <label htmlFor="task-title" className="form-label">
          Task Name <span className="required-star">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error && e.target.value.trim()) setError('');
          }}
          placeholder="Enter a task to do"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="task-description" className="form-label">
          Description <span className="optional-tag">(optional)</span>
        </label>
        <textarea
          id="task-description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add optional details..."
          className="form-textarea"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        + Add Task
      </button>
    </form>
  );
}