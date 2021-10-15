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
        <button>Login</button>
      </Link>
      <Link to="/account-creation">
        <button>Sign Up</button>
      </Link>
    </section>
  );
};

export default Home;