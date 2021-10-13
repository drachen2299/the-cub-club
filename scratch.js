import { useReducer } from "react";

const useKeyPress =(initialState = [0,0]) => {
    const [selectedTile, dispatch] = useReducer(([y,x], action) => {
        switch (action.type) {
            //left
            case 65:
                if( x === 0 ) {
                    return [y,x];
                }
                return [y,x -1];
            //up
            case 87:
                if( y === 0 ) {
                    return [y,x];
                }
                return [y - 1, x];

            // right
            case 68:
                if( x === 3) {
                    return[y,x];
                }
                return [y, x + 1];
            // down
            case 83:
                if( y === 3) {
                    return [y,x];
                }
                return [y + 1, x];
            default:
                throw new Error();
        }
    }, initialState)
    return [selectedTile , dispatch]; 
}

export default useKeyPress; 



const [tiles, setTiles] = useState(createEmptyBoard());
  const [selectedTile, dispatch] = useKeyPress([0,0]);
  const [user, setUser] = useState(null);



  </Route>
          <Route exact path="/account-creation" >
            <Register user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/log-in">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/game">
            <Game selectedTile={selectedTile} tiles={tiles} user={user} />



            const Tile = (props) => {
    return (
        <>
        {props.tiles.map((tile, i) => (
        <div className={`${props.selectedTile[1] === tile.x && props.selectedTile[0] === tile.y && "selected"} ${props.SelectedTile}`}></div>
        ))}
        </>
    );
};

export default Tile;