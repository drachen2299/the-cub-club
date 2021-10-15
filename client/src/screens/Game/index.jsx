import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import Tile from "../../components/Tile";
import useKeyPress from "../../hooks/use-keypress";
import { createEmptyBoard } from "../../services";


const Game = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard(10,2));
  const [{ selectedTile, canKeyPress }, dispatch] = useKeyPress([0,0]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    return () => {
      window.removeEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    };
  }, []);
  useEffect(() => {
    console.log(props.user);
    // if showmodal dispatch stop keyPress else dispath start keyPress
    if (showModal) {
      dispatch({type: "stop-keypress"})
    } else {
      dispatch({type: "start-keypress"})
    }
  }, [showModal])

  return (
    <>
      <Nav user={props.user} setUser={props.setUser}/>
      <div>
        <Modal showModal={showModal} setShowModal={setShowModal} user={props.user} />
        <div className="game-board">
          <div className="grid-board">
            <Tile bear={props.user.bear} setShowModal={setShowModal} selectedTile={selectedTile} tiles={tiles} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
