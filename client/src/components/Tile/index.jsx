const Tile = (props) => {
    return (
        <>
        {props.tiles.map((tile, i) => (
        <div className={`${props.selectedTile[0] === tile.x && props.selectedTile[0] === tile.y && "selected"} ${props.SelectedTile}`}></div>
        ))}
        </>
    );
};

export default Tile;