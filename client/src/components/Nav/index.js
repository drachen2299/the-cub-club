import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <h1 class="logo">THE CUB CLUB</h1>
      <h3 class="username">{props.user.username}</h3>
      <Link to="/">
        <button>Log Out</button>
      </Link>
    </nav>
  );
};

export default Nav;
