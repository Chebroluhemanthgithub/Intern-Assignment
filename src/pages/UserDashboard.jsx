import React from 'react';
import TaskList from '../components/TaskList';

export default function UserDashboard({ user, tasks, updateTask }) {
  const myTasks = tasks.filter(t => t.assignedUser === user.username);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <p>Welcome {user.username}</p>

      <center><TaskList className="user-tasklist"
        tasks={myTasks}
        onEdit={null}
        onDelete={null}
        onStatusChange={updateTask}
        showControls={false}
      /></center>
    </div>
  );
}
