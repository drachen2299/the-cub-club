import React, { useState } from "react";
import { readLetter, deleteLetter } from "../../services/letters";

const ReadMail = (props) => {
  // const [letterContents, setLetterContents] = useState("");

  // const fetchLetter = async (letterId) => {
  //   try {
  //     const thisLetter = await readLetter(letterId);
  //     setLetterContents(thisLetter);
  //     return;
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }

  const handleDelete = async (letterId) => {
    try {
      await deleteLetter(letterId);
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <container>
      <h2 className="Header">Mail</h2>
      <ul className="ClubMembersList">
        {props.mail.map((letter) =>
            <button key={letter._id}>
              {letter.sender.username}
            </button>
          )}
      </ul>
      {props.mail.map((letter) => (
      <div className="MessageFormContainer hidden" key={letter._id}>
        <p>{letter.letter}</p>
        <button onClick={() => handleDelete(letter._id)}>Delete Letter</button>
      </div>
      ))}
    </container>
  );
};

export default ReadMail;
