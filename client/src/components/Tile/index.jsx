const Tile = (props) => {
    return (
        <>
        {props.tiles.map((tile, i) => (
        <div onClick={() => {
            if (Math.abs(props.selectedTile[1] - tile.x) + Math.abs(props.selectedTile[0] - tile.y) === 1 && tile.contents === "mailbox") props.setShowModal((curr) => !curr)
        }} className={
            `${tile.contents === "mailbox" ? "mailbox" : ""} 
            ${props.members?.filter(member => member.location.x === tile.x && member.location.y === tile.y).length &&
            props.selectedTile[1] === tile.x && 
            props.selectedTile[0] === tile.y && 
            `selected ${props.members?.filter(member => member.location.x === tile.x && member.location.y === tile.y).map(member => member.bear).join(" ")}`}`
        }>
        </div>
        ))}
        </>
    );
};

export default Tile;