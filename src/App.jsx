import React, { useState } from "react";
import PMDashboard from "./pages/PMDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./components/Login";
import { users } from "./data/Users";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onLogin = ({ username, password }) => {
    const match = users.find(
      u => u.username === username && u.password === password
    );

    if (match) {
      setLoggedInUser(match);
      return { success: true };
    }

    return { success: false, message: "Invalid username or password" };
  };

  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(t => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  if (!loggedInUser) {
    return <Login onLogin={onLogin} />;
  }

  if (loggedInUser.role === "PM") {
    return (
      <PMDashboard
        user={loggedInUser}
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );
  }

  return (
    <UserDashboard
      user={loggedInUser}
      tasks={tasks}
      updateTask={updateTask}
    />
  );
}
