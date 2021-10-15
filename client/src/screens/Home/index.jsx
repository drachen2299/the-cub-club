import { Link } from "react-router-dom";
import homeImage from '../../assets/home-asset.png'
const Home = () => {
  return (
    <section className="home">
      <img id='home-img' src={homeImage} alt="Tofu pointing at a sign"/>
      <h1 className="home-logo">THE CUB CLUB</h1>
      <h2 className="home-heading">Welcome!</h2>
      <h2 className="home-textfield">**Instructions will go here**</h2>
      <Link to="/log-in">
        <button className="home-login-button">Login</button>
      </Link>
      <Link to="/account-creation">
        <button className="home-signup-button">Sign Up</button>
      </Link>
    </section>
  );
};

export default Home;