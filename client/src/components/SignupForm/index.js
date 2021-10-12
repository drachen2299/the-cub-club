import { useState } from "react";

const SignupForm = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");



  return (
      <form >
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)}/>
        <button type="submit">Sign up</button>
      </form>
  );
};

export default SignupForm;
