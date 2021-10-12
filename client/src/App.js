import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './screens/Home';
import CreateAvatar from './screens/CreateAvatar';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Game from './screens/Game';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create-avatar">
            <CreateAvatar/>
          </Route>
          <Route exact path="/sign-up">
            <Signup/>
          </Route>
          <Route exact path="/log-in">
            <Login/>
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
