import React from "react";

export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  showControls
}) {

  if (!tasks || tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">

          <div className="task-left">
            <strong>{task.title}</strong>
            <p className="task-desc">{task.description}</p>
            <p className="task-meta">Assigned to: {task.assignedUser}</p>
          </div>

          <div className="task-right">

            <select
              value={task.status}
              onChange={(e) =>
                onStatusChange({ ...task, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            {showControls && (
              <button className="edit-btn" onClick={() => onEdit(task)}>
                Edit
              </button>
            )}

            {showControls && (
              <button className="delete-btn" onClick={() => onDelete(task.id)}>
                Delete
              </button>
            )}

          </div>

        </li>
      ))}
    </ul>
  );
}
