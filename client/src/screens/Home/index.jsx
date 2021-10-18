import { Link } from "react-router-dom";
import homeImage from "../../assets/home-asset.png";
const Home = () => {
  return (
    <section className="screen">
      {/* <img id="main-img" src={homeImage} alt="Tofu pointing at a sign" /> */}

      <div id="home-screen-contents">
        <h1 className="logo">THE CUB CLUB</h1>
        <div className="inner-content">
          <h2 className="heading">Welcome!</h2>
          <h2 className="textfield">**Instructions will go here**</h2>
          <Link className="btn-1-home" to="/log-in">
            <button className="home-login-button">Login</button>
          </Link>
          <Link className="btn-2-home" to="/account-creation">
            <button className="home-signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
