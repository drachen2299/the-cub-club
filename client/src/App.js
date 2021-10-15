import {Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import io from 'socket.io-client';
import Home from './screens/Home';
import Register from './screens/Register';
import { verifyUser } from "./services";
import Login from './screens/Login';
import Game from './screens/Game';
import { useHistory, useLocation } from "react-router-dom";
import './sass/input.scss';


function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://localhost:3001`);
    newSocket.on('member added', (res) => {
      setRoom(res);
    });
    newSocket.on('room updated', (res) => {
      console.log(res);
      setRoom(res);
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);
  const location = useLocation();

  useEffect(() => {
    verifyUser().then((verifiedUser) => setUser(verifiedUser))
  }, []);

  useEffect(() => {
    if (user && (location.pathname === '/log-in' || location.pathname === '/')) {
      history.push('/game')
    } else if (!user && location.pathname === '/game') {
      history.push('/')
    }
  }, [user, location.pathname, history])

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
            {user ? (
              <Game 
                user={user} 
                room={room}
                socket={socket}
              /> 
            ) : null}
            </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
