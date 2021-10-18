import { Link, useHistory } from "react-router-dom";
import { logoutUser } from "../../services";
const Nav = (props) => {
  const history = useHistory();
  
  const handleChange = () => {
    logoutUser();
    props.setUser(null);
    history.push("/");
  }
  return (
    <nav>
      <h1 class="logo">THE CUB CLUB</h1>
      <h3 class="username">{props.user.username}</h3>
      <Link class="link" to="/">
        <button class="button" onClick={handleChange}>Log Out</button>
      </Link>
    </nav>
  );
};

export default Nav;
