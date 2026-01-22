import { useState } from "react";
import AppConfig from "../config";

function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${AppConfig.API_BASE_URL}/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await res.json();
      setMessage(result.message);
      if (result.success) onSignupSuccess();
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default Signup;
