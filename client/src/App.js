import {Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import io from 'socket.io-client';
import Home from './screens/Home';
import Register from './screens/Register';
import Avatar from "./components/Avatar";
import { verifyUser } from "./services";
import Login from './screens/Login';
import Game from './screens/Game';
import { useHistory } from "react-router-dom";
import './sass/input.scss';


function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const [room, setRoom] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://localhost:3001`);
    newSocket.emit('add member', {
      name: 'nateshim'
    });
    newSocket.on('member added', (res) => {
      setRoom(res);
    });
    newSocket.on('room updated', (res) => {
      console.log(res);
      setRoom(res);
    })
    return () => newSocket.close();
  }, []);
  useEffect(() => {
    const fetchVerifyUser = async () => {
      
      const verifiedUser = await verifyUser();
      if (!verifiedUser) {
        history.push("/");
      } else {
        setUser(verifiedUser);
      }
    }
    fetchVerifyUser();
  }, [history])
  return (
    <div className="App">
      <Switch>
        <main>
        {
        <div>
          {room?.members.map((member) => (
            <p>{member.socketId}</p>
          ))}
        </div>
      }
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
