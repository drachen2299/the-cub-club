import Signup from "../../components/Signup";
import Avatar from "../../components/Avatar";
import Nav from "../../components/Nav";

const Register = (props) => {

  const { id, username } = props.user;

  return (
  <>
    <section>
      <Signup setUser={props.setUser}/>
    </section>
    {/* conditionally render bear creation */}
    <section>
      <Nav username={username}/>
      <h3>Create your bear!</h3>
      <Avatar id={id}/>
    </section>
  </>
  );
};

export default Register;