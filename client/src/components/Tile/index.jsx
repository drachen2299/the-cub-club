import { useEffect } from "react";

const Tile = (props) => {
  // if w, a, s, d keypress detected, change backgroundImage of fur color class to corresponding sprite angle
  let direction = "";
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'w') {
        direction = `.up`
      } else if (e.key === 'a') {
        console.log('Left')
      } else if (e.key === 's') {
        console.log('Down')
      } else if (e.key === 'd') {
        console.log('Right')
      }
    });
  }, []);
  return (
    <>
      {props.tiles.map((tile, i) => (
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
          className={`${tile.contents === "mailbox" ? "mailbox" : ""} 
            ${
              props.selectedTile[1] === tile.x &&
              props.selectedTile[0] === tile.y &&
              `selected ${props.bear.fur}${direction}`
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
