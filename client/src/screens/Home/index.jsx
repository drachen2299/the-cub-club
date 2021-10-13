import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h2>Welcome!</h2>
      <h2>**Instructions will go here**</h2>
      <Link to="/log-in">
        <h2>Login</h2>
      </Link>
      <Link to="/account-creation">
        <h2>Sign Up</h2>
      </Link>
    </section>
  );
};

export default Home;