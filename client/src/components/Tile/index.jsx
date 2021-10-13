const Tile = (props) => {
    return (
        <>
        {props.tiles.map((tile, i) => (
        <div onClick={() => {
            if (Math.abs(props.selectedTile[1] - tile.x) + Math.abs(props.selectedTile[0] - tile.y) === 1 && tile.contents === "mailbox") props.setShowModal((curr) => !curr)
        }} className={`${props.selectedTile[1] === tile.x && props.selectedTile[0] === tile.y && "selected"} ${props.SelectedTile}`}></div>
        ))}
        </>
    );
};

export default Tile;