import Signup from "../../components/Signup";
import Avatar from "../../components/Avatar";
import Nav from "../../components/Nav";

const Register = (props) => {
  return (
    <>
      {props.user ? (
        <>
          <Nav user={props.user} />
          <container id="choose-bear">
            <h3 id="choose-bear-title">Create your bear!</h3>
            <Avatar user={props.user} setUser={props.setUser} />
          </container>
        </>
      ) : (
        <section>
          <Signup setUser={props.setUser} />
        </section>
      )}
    </>
  );
};

export default Register;
