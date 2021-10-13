import {Switch, Route, useLocation} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Home from './screens/Home';
import Register from './screens/Register';
import useKeyPress from "./hooks/use-keypress";
import Login from './screens/Login';
import Game from './screens/Game';
import { createEmptyBoard } from "./services";
import './App.css';

function App() {
  // tile spaces and selected tiles states
  const [tiles, setTiles] = useState(createEmptyBoard(1,1));
  const [selectedTile, dispatch] = useKeyPress([0,0]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    return () => {
      window.removeEventListener("keydown", (e) => dispatch({type: e.keyCode}));
    };
  }, []);

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
            <Game user={user} selectedTile={selectedTile} tiles={tiles} /> 
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
