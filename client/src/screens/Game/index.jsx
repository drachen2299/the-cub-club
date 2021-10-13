import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from '../../components/Modal';
import Tile from '../../components/Tile';
import "./game.css";

const Game = (props) => {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <Nav />
    <div>
      <Modal showModal={showModal} user={props.user}/>
      <p>This is where you can play the game!</p>
      <button onClick={() => setShowModal(!showModal)}>Show Messages</button>
      
    </div>
    </>
  );
};

export default Game;