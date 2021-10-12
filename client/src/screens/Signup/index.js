import { useState } from "react";
import { registerUser } from "../../services";
import { useHistory } from "react-router";

const Signup = (props) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPw, setConfirmPw] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        email,
        password
      };
      const user = await registerUser(userInfo);
      props.setUser(user);
      history.push(`/create-avatar/${user._id}`)
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <section>
      <h3>Create an account!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* <label htmlFor="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)}/> */}
        <button type="submit">Sign up</button>
      </form>
    </section>
  );
};

export default Signup;
