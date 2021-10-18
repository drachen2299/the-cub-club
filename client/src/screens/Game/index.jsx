import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import Tile from "../../components/Tile";
import useKeyPress from "../../hooks/use-keypress";
import { createEmptyBoard } from "../../services";

const Game = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard(1, 10));
  const [{ selectedTile, canKeyPress }, dispatch] = useKeyPress([3, 11]);
  const { user, room, socket } = props;

  useEffect(() => {
    socket.emit("move member", {
      username: user.username,
      location: {
        x: selectedTile[1],
        y: selectedTile[0],
      },
    });
  }, [selectedTile, socket, user.username]);
  useEffect(() => {
    socket.emit("add member", {
      username: user.username,
      bear: user.bear.fur,
      location: {
        x: 11,
        y: 3,
      },
    });
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", (e) => dispatch({ type: e.keyCode }));
    return () => {
      window.removeEventListener("keydown", (e) =>
        dispatch({ type: e.keyCode })
      );
    };
  }, []);
  useEffect(() => {
    // if showmodal dispatch stop keyPress else dispath start keyPress
    if (showModal) {
      dispatch({ type: "stop-keypress" });
    } else {
      dispatch({ type: "start-keypress" });
    }
  }, [showModal]);

  return (
    <>
      <Nav user={props.user} setUser={props.setUser} />
      <div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          user={props.user}
        />

        <div className="game-board">
          <div className="grid-board">
            <Tile bear={props.user.bear} members={room?.members} setShowModal={setShowModal} selectedTile={selectedTile} tiles={tiles} user={user}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
