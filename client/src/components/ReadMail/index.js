import React, { useEffect, useState } from "react";
import { checkMail, readLetter, deleteLetter } from "../../services/letters";

const ReadMail = (props) => {
  const { _id } = props.user;
  const [mail, setMail] = useState([]);
  const [letterContent, setLetterContent] = useState({});

  useEffect(() => {
    const fetchMail = async () => {
    const response = await checkMail(_id);
    setMail(response);
    console.log(mail);
    }
    fetchMail();
  }, [props.setActiveTab]);

  return (
    <container>
      <ul className="ClubMembersList">
        {mail.map((letter) =>
            <button onClick={setLetterContent(letter)}>
              {letter?.sender.username}
            </button>
          )}
      </ul>
      <div className="MessageFormContainer">
        <p>{letterContent.letter}</p>
        <button>Delete Letter</button>
      </div>
    </container>
  );
};

export default ReadMail;
