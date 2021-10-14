import {Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Game from './screens/Game';
import './sass/input.scss';

function App() {
  const [user, setUser] = useState(null);

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
            <Game user={user} /> 
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
