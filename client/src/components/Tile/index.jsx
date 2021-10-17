import { useState } from "react";

const Tile = (props) => {
  // if w, a, s, d keypress detected, change backgroundImage of fur color class to corresponding sprite angle
  const [direction, setDirection] = useState(`${props.bear.fur}`)

  window.addEventListener("keydown", (e) => {
      if (e.key === 'w') {
        setDirection(`${props.bear.fur}-up`)
      } else if (e.key === 'a') {
        setDirection(`${props.bear.fur}-left`)
      } else if (e.key === 's') {
        setDirection(`${props.bear.fur}`)
      } else if (e.key === 'd') {
        setDirection(`${props.bear.fur}-right`)
      }
    });

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
            }`}
        >
          <div>
            {props.members
              ?.filter(
                (member) =>
                  member.location.x === tile.x && member.location.y === tile.y
              )
              .map((member) => (
                member.bear != props.bear.fur ? <div className={member.bear + " members"}></div> : <div className={"members"}></div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Tile;
