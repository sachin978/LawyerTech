import { useState } from "react";
import AppConfig from "../config";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${AppConfig.API_BASE_URL}/users/login?username=${username}&password=${password}`,
        { method: "POST" }
      );

      const result = await res.json();
      result.success ? onLoginSuccess() : setMessage(result.message);
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
      <button type="submit">Login</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default Login;
