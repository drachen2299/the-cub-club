import {useState, useEffect} from "react";
import {getUsers, sendLetter} from '../../services';
import './index.css';

const Modal = (props) => {
  const [username, setUsername] = useState('beeboop12')
  const [recipient, setRecipient] = useState({});
  const [letter, setLetter] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const letterInfo = {
        username,
        letter,
      }
      sendLetter(letterInfo);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
      getUsers().then((newUsers) => {
        console.log(newUsers);
        setUsers(newUsers);
      })
  }, [])

  return (
    <div>
      {props.showModal ?
        <div className="Modal">
          <h1 className="ModalTitle">Send a Letter?</h1>
          <div className="ModalScreenContainer"> 
            <div className="ClubMembersContainer">
              <h2 className="Header">Club Members</h2>
              <ul className="ClubMembersList">
                {
                  users?.map((user) => (
                    <button onClick={() => setRecipient(user)}>{user.username}</button>
                  ))
                }
              </ul>
            </div>
            <div className="MessageFormContainer">
              <div className="MessageFormHeader">
                <h2 className="Header">To: </h2>
                <h3>{recipient?.username}</h3>
              </div>
              <form className="MessageForm" onSubmit={handleSubmit}>
                <label className="Header" htmlFor="message">
                  <h2>Message:</h2>
                </label>
                <input id="message" type="text" value={letter} onChange={(e) => setLetter(e.target.value)}/>
                <button type="submit">Send!</button>
              </form>
            </div>
          </div>
        </div>
        :
        <div></div>
      }
    </div>
  );
};

export default Modal;