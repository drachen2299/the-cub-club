import React, { useState } from "react";
import { readLetter, deleteLetter } from "../../services/letters";

const ReadMail = (props) => {

  const [activeLetter, setActiveLetter] = useState({});

  const handleDelete = async (letterId) => {
    try {
      await deleteLetter(letterId);
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <div className="ModalScreenContainer">
      <section class="ClubMembersContainer">
      <h2 className="Header">Mail</h2>
      <ul className="ClubMembersList">
        {props.mail.map((letter) =>
            <button key={letter._id} onClick={() => setActiveLetter(letter)} >
              {letter.sender.username}
            </button>
          )}
      </ul>
      </section>
      <section className="MessageFormContainer">
        <p>{activeLetter.letter}</p>
        <button className="DeleteButton" onClick={() => handleDelete(activeLetter._id)}>Delete Letter</button>
      </section>
    </div>
  );
};

export default ReadMail;
