import Avatar from "../../components/Avatar";
import Nav from "../../components/Nav";

const CreateAvatar = (props) => {
  const { username, _id } = props.user
  return (
    <section>
      <Nav username={username}/>
      <h3>Create your bear!</h3>
      <Avatar _id={_id}/>
    </section>
  );
};

export default CreateAvatar;