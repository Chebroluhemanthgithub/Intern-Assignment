import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/Taskform';
import EditTaskModal from '../components/EditTaskModal';

export default function PMDashboard({ user, tasks, addTask, updateTask, deleteTask }) {
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="pm-dashboard">
      <h2>PM Dashboard</h2>
      <p>Welcome, {user.username}</p>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        onEdit={setEditTask}
        onDelete={deleteTask}
        onStatusChange={updateTask}
        showControls={true}
      />

      {editTask && (
        <EditTaskModal
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={(updated) => {
            updateTask(updated);
            setEditTask(null);
          }}
        />
      )}
    </div>
  );
}
