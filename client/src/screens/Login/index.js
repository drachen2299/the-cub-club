import { useState } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../../services";
import homeImage from '../../assets/home-asset.png';

const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        password
      };
      const user = await loginUser(userInfo);
      if (user) {
        props.setUser(user);
        return history.push('/game');
      } 
        alert("Invalid username or password")
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <section className="screen">
      <img id="main-img" src={homeImage} alt="Tofu pointing at a sign"/>
      <div id="login-screen-contents">
      <h1 className="logo">THE CUB CLUB</h1>
      <h3 className="heading">Welcome back!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="form-button" type="submit">Log in</button>
      </form>

      </div>
    </section>
  );
};

export default Login;
