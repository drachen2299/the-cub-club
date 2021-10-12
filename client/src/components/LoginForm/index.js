import { useState } from "react";

const LoginForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <section>
      <form >
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="text" />
        <button type="submit">Log in</button>
      </form>
    </section>
  );
};

export default LoginForm;
