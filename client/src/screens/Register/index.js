import Signup from "../../components/Signup";
import Avatar from "../../components/Avatar";
import Nav from "../../components/Nav";

const Register = (props) => {



  return (
  <>
    <section>
      <Signup setUser={props.setUser}/>
    </section>
    {/* conditionally render bear creation */}
    <section>
      <Nav user={props.user}/>
      <h3>Create your bear!</h3>
      <Avatar user={props.user}/>
    </section>
  </>
  );
};

export default Register;