import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-avatar:id">Create Avatar</Link>
      <Link to="sign-up">Sign up</Link>
      <Link to="log-in">Log in</Link>
      <Link to="/game">Game</Link>
    </nav>
  );
};

export default Nav;