import {Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from './screens/Home';
import CreateAvatar from './screens/CreateAvatar';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Game from './screens/Game';
import { verifyUser } from "./services";
import './App.css';

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser))
  }, []);


  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create-avatar/:id">
            <CreateAvatar />
          </Route>
          <Route exact path="/sign-up">
            <Signup setUser={setUser}/>
          </Route>
          <Route exact path="/log-in">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
