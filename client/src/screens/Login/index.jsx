import LoginForm from "../../components/LoginForm";

const Login = (props) => {

  return (
    <section>
      <h3>Weclome back!</h3>
      <LoginForm setUser={props.setUser}/>
    </section>
  );
};

export default Login;