import {Switch, Route, useLocation} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Game from './screens/Game';
// import { createEmptyBoard } from "./services";
import './App.css';

function App() {
  // tile spaces and selected tiles states
  // const [tiles, setTiles] = useState(createEmptyBoard());
  // const [selectedTile, setSelectedTile] = useState([0, 0]);
  // const location = useLocation();

  const [user, setUser] = useState(null);

//   const move = useCallback((dir, change) => {
//     setSelectedTile((coords) => {
//       if (coords[dir] + change > -1 && coords[dir] + change <4){
//         coords[dir] += change;
//       }
//       return [...coords];
//     });
//   }, []);
//   const keyPress = useCallback(
//     (e) => {
//       if (location.pathname !== "/game" ){
//         return
//       } else {
//         e.preventDefault();
//         switch (e.keyCode) {
//           // left
//           case 65:
//           move (0, -1);
//           break;
//           // up
//           case 87:
//           move (1, -1);
//           break;
//           // right
//           case 68:
//           move (0, 1);
//           break;
//           // down
//           case 83:
//           move (1, 1);
//           break;
//           default:
//           break;
//         }
//       }
//     }
// ,[location.pathname, move]  )

// // listeners for keys

// useEffect(() => {
//   window.addEventListener("keydown", keyPress)
//   return () => {
//     window.removeEventListener("keydown", keyPress);
//   }
// }, [keyPress, move]);
// useEffect(() => {
//   const [y, x] = selectedTile;
//   const newTiles = createEmptyBoard();
//   const currentTile = tiles.find((tile) => tile.y === y && tile.x === x);

  
//   setTiles(newTiles);
// }, [selectedTile]);

  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/account-creation" >
            <Register user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/log-in">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/game">
            {/* <Game selectedTile={selectedTile} tiles={tiles} /> */}
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
