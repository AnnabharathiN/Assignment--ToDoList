import React from 'react';

export default function TodoStats({ totalCount, completedCount, onClearAll }) {
  const activeCount = totalCount - completedCount;

  return (
    <div className="card stats-bar">
      <div className="stats-group">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{totalCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active</span>
          <span className="stat-value active">{activeCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completed</span>
          <span className="stat-value completed">{completedCount}</span>
        </div>
      </div>

      {totalCount > 0 && (
        <button onClick={onClearAll} className="btn btn-clear">
          Clear All
        </button>
      )}
    </div>
  );
}