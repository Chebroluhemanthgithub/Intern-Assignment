import React, { useState } from 'react';
import { users } from '../data/Users';

export default function EditTaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);
  const [deadline, setDeadline] = useState(task.deadline);
  const [assignedUser, setAssignedUser] = useState(task.assignedUser);
  const [status, setStatus] = useState(task.status);

  const save = (e) => {
    e.preventDefault();
    onSave({
      ...task,
      title,
      description: desc,
      deadline,
      assignedUser,
      status
    });
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>Edit Task</h3>

        <form onSubmit={save}>
          <input value={title} onChange={e => setTitle(e.target.value)} />

          <textarea value={desc} onChange={e => setDesc(e.target.value)} />

          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />

          <select value={assignedUser} onChange={e => setAssignedUser(e.target.value)}>
            {users.filter(u => u.role === "User").map(u => (
              <option key={u.id} value={u.username}>
                {u.username}
              </option>
            ))}
          </select>

          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <button className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>

      </div>
    </div>
  );
}
