import React, { useState } from "react";
import "../index.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const res = onLogin({ username, password });
    if (!res.success) {
      alert(res.message || "Invalid username or password");
      return;
    }
  };

  return (
   <div className="outer-login">
      <div className="login-card">

        <form className="login-form" onSubmit={submit}>
            <h2>Login</h2>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <br/>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

          <button className="login-btn" type="submit">LOGIN</button>
          <p> ProjectManager : Manager : PM123  </p>
            <p> users1,2 : User1 : 123</p>
        </form>
      </div>
    </div>
 
  );
}
