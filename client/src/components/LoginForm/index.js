import { useState } from "react";

const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
      <form >
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Log in</button>
      </form>
  );
};

export default LoginForm;
