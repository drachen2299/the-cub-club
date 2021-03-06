import { useState, useEffect, useCallback } from "react";

const Tile = (props) => {
  const { fur } = props.bear;
  // if w, a, s, d keypress detected, change backgroundImage of fur color class to corresponding sprite angle
  const [direction, setDirection] = useState(`${fur}`);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'w') {
      setDirection(`${fur}-up-step`);
      setTimeout(() => {
        setDirection(`${fur}-up`) 
      }, 300)
    } else if (e.key === 'a') {
      setDirection(`${fur}-left-step`);
      setTimeout(() => {
        setDirection(`${fur}-left`) 
      }, 300)
    } else if (e.key === 's') {
      setDirection(`${fur}-step`);
      setTimeout(() => {
        setDirection(`${fur}`) 
      }, 300)
    } else if (e.key === 'd') {
      setDirection(`${fur}-right-step`);
      setTimeout(() => {
        setDirection(`${fur}-right`) 
      }, 300)
    }
  }, [])
  useEffect(() =>{
    if(props.keyPressed === "w"){
      setDirection(`${fur}-up-step`);
      setTimeout(() => {
        setDirection(`${fur}-up`) 
      }, 300)
    }else if (props.keyPressed === 'a') {
      setDirection(`${fur}-left-step`);
      setTimeout(() => {
        setDirection(`${fur}-left`) 
      }, 300)
    } else if (props.keyPressed === 's') {
      setDirection(`${fur}-step`);
      setTimeout(() => {
        setDirection(`${fur}`) 
      }, 300)
    } else if (props.keyPressed === 'd') {
      setDirection(`${fur}-right-step`);
      setTimeout(() => {
        setDirection(`${fur}-right`) 
      }, 300)
    }
  }, [props.keyPressed, fur])
  useEffect(() => {
    //console.log(props.showModal)
    if (!props.showModal) {
      window.addEventListener("keydown", handleKeyPress);
    } else {
      //console.log("comeon")
      window.removeEventListener("keydown", handleKeyPress);
    }
  }, [props.showModal])
  return (
    <>
    
      {props.tiles.map((tile) => (
        <div
          onClick={() => {
            if (
              Math.abs(props.selectedTile[1] - tile.x) +
                Math.abs(props.selectedTile[0] - tile.y) ===
                1 &&
              tile.contents === "mailbox"
            )
              props.setShowModal((curr) => !curr);
          }}
          className={`${tile.contents === "mailbox" ? "mailbox" : null} 
            ${
              props.selectedTile[1] === tile.x &&
              props.selectedTile[0] === tile.y &&
              `selected ${direction}`
            }
            ${props.members
              ?.filter(
                (member) =>
                  member.location.x === tile.x && member.location.y === tile.y
              )
              .map((member) => (
                member.username != props.user.username ? `${member.bear} members` : "members"
              ))}
            `}
        >
          {props.members
              ?.filter(
                (member) =>
                  member.location.x === tile.x && member.location.y === tile.y
              )
              .map((member) => (
                member.username != props.user.username ? member.username : ""
              ))}
        </div>
      ))}
      
    </>
  );
};

export default Tile;
