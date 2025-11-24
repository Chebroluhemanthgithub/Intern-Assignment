import React, { useState } from "react";
import { users } from "../data/Users";

export default function TaskForm({ addTask }) {
  const userList = users.filter(u => u.role === "User");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedUser, setAssignedUser] = useState(userList[0]?.username || "");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title");
      return;   
    }

    addTask({
      id: Date.now(),
      title,
      description: desc,
      deadline,
      assignedUser,
      status: "Pending"
    });

    setTitle("");
    setDesc("");
    setDeadline("");
    setAssignedUser(userList[0]?.username || "");
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <h3>Add Task</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <select
        value={assignedUser}
        onChange={(e) => setAssignedUser(e.target.value)}
      >
        {userList.map((u) => (
          <option key={u.id} value={u.username}>
            {u.username}
          </option>
        ))}
      </select>

      <button className="task-btn" type="submit">Add Task</button>
    </form>
  );
}
