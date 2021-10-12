import {useState} from "react";
import Nav from "../../components/Nav";
import Modal from '../../components/Modal';

const Game = (props) => {
  const { username } = props.user
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    <Nav username={username}/>
    <div>
      <Modal showModal={showModal}/>
      <p>This is where you can play the game!</p>
      <button onClick={() => setShowModal(!showModal)}>Show Messages</button>
    </div>
    </>
  );
};

export default Game;