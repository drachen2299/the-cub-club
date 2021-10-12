import SignupForm from "../../components/SignupForm";

const Signup = (props) => {
  return (
    <div>
      <h2>Welcome!</h2>
      <h3>Create your account by filling out the fields below.</h3>
      <SignupForm setUser={props.setUser}/>
    </div>
  );
};

export default Signup;