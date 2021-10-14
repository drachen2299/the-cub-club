import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import Tile from "../../components/Tile";
import useKeyPress from "../../hooks/use-keypress";
import { createEmptyBoard } from "../../services";
import "./game.css";

const Game = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard(1,1));
  const [{ selectedTile, canKeyPress }, dispatch] = useKeyPress([0,0]);
  useEffect(() => {
    window.addEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    return () => {
      window.removeEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    };
  }, []);
  useEffect(() => {
    // if showmodal dispatch stop keyPress else dispath start keyPress
    if (showModal) {
      dispatch({type: "stop-keypress"})
    } else {
      dispatch({type: "start-keypress"})
    }
  }, [showModal])

  return (
    <>
      <Nav />
      <div>
        <Modal showModal={showModal} setShowModal={setShowModal} user={props.user} />
        <p>This is where you can play the game!</p>
        <button onClick={() => setShowModal(!showModal)}>Show Messages</button>
        <div className="game-board">
          <div className="grid-board">
            <Tile setShowModal={setShowModal} selectedTile={selectedTile} tiles={tiles} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
