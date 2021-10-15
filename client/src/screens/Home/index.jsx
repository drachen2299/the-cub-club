import { Link } from "react-router-dom";
import homeImage from '../../assets/home-asset.png'
const Home = () => {
  return (
    <section className="home">
      <img id='home-img' src={homeImage} alt="Tofu pointing at a sign"/>
      <h1>THE CUB CLUB</h1>
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