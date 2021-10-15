import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import Tile from "../../components/Tile";
import useKeyPress from "../../hooks/use-keypress";
import { createEmptyBoard } from "../../services";
import io from 'socket.io-client';


const Game = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tiles, setTiles] = useState(createEmptyBoard(10,2));
  const [{ selectedTile, canKeyPress }, dispatch] = useKeyPress([0,0]);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    console.log(newSocket);
    newSocket.emit('add member', {
      name: 'nateshim'
    });
    newSocket.on('member added', (res) => {
      setRoom(res);
    });
    newSocket.on('room updated', (res) => {
      console.log(res);
      setRoom(res);
    })
    return () => newSocket.close();
  }, []);

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
      <Nav />
      <div>
        <Modal showModal={showModal} setShowModal={setShowModal} user={props.user} />
        <div className="game-board">
          <div className="grid-board">
          <div>
            <p>Here</p>
            {room?.members.map((member) => (
            <p>{member.socketId}</p>
          ))}</div>
            <Tile bear={props.user.bear} setShowModal={setShowModal} selectedTile={selectedTile} tiles={tiles} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
