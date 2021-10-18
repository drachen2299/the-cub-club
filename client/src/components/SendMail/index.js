import { useState, useEffect } from "react";
import { sendLetter } from "../../services/letters";
import { getUsers } from "../../services";

const SendMail = (props) => {
  const [letter, setLetter] = useState("");
  const [recipient, setRecipient] = useState({});
  const [isValidLetter, setIsValidLetter] = useState(true);
  const [isValidRecipient, setIsValidRecipient] = useState(true);
  const [didSubmit, setDidSubmit] = useState(false);
  const [sender, setSender] = useState({});
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    setSender(props.user);
    getUsers().then((newUsers) => {
      setUsers(newUsers);
    });
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (letter === "" || JSON.stringify(recipient) === "{}") {
        if (letter === "") setIsValidLetter(false);
        if (JSON.stringify(recipient) === "{}") setIsValidRecipient(false);
      } else {
        const letterInfo = {
          recipient,
          letter,
          sender: sender,
        };
        sendLetter(letterInfo);
        setDidSubmit(!didSubmit);
        setTimeout(() => {
          setDidSubmit(false);
        }, 1000);
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <container>
      <div>
        {didSubmit ? (
          <div>Message sent</div>
        ) : (
          <div>
            <div className="ModalScreenContainer">
              <div className="ClubMembersContainer">
                <h2 className="Header">Club Members</h2>
                <ul className="ClubMembersList">
                  {users.map((user) =>
                    user.username != sender.username ? (
                      <button key={user._id} onClick={() => setRecipient(user)}>
                        {user.username}
                      </button>
                    ) : null
                  )}
                </ul>
              </div>
              <div className="MessageFormContainer">
                <div className="MessageFormHeader">
                  <h2 className="Header">To: </h2>
                  <h3>{recipient?.username}</h3>
                </div>
                <form className="MessageForm" onSubmit={handleSubmit}>
                  <label htmlFor="message">
                    <h2 className="Header">Message:</h2>
                  </label>
                  <input
                    id="message"
                    type="text"
                    value={letter}
                    onChange={(e) => setLetter(e.target.value)}
                  />
                  {!isValidLetter ? (
                    <div className="ErrorMessage">Letter is empty!</div>
                  ) : (
                    <div></div>
                  )}
                  {!isValidRecipient ? (
                    <div className="ErrorMessage">
                      Pick someone to send your letter to!
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <button className="SubmitButton" type="submit">
                    Send!
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </container>
  );
};

export default SendMail;
