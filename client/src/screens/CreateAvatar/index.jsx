import Avatar from "../../components/Avatar";
import Nav from "../../components/Nav";

const CreateAvatar = (props) => {
  const { username } = props.user
  return (
    <section>
      <Nav username={username}/>
      <h3>Create your bear!</h3>
      <Avatar />
    </section>
  );
};

export default CreateAvatar;