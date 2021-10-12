import {useState} from "react";
import Modal from '../../components/Modal';

const Game = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal showModal={showModal}/>
      <p>This is where you can play the game!</p>
      <button onClick={() => setShowModal(!showModal)}>Show Messages</button>
    </div>
  );
};

export default Game;