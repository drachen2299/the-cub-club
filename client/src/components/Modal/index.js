import { useState, useEffect } from "react";
import SendMail from "../SendMail";
import ReadMail from "../ReadMail";
import { checkMail } from "../../services/letters";

const Modal = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => setActiveTab("tab1");
  const handleTab2 = () => setActiveTab("tab2");
  const [mail, setMail] = useState([]);

  useEffect(() => {
    const fetchMail = async () => {
      const response = await checkMail(props.user.id);
      setMail(response);
    };
    fetchMail();
    console.log(mail);
  }, [props.showModal]);

  return (
    <div>
      {props.showModal ? (
        <container className="Modal">
          <ul className="tab-nav">
            <button
              onClick={() => props.setShowModal((curr) => !curr)}
              className="ExitButton"
            >
              X
            </button>
            <li
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              Check Mail
            </li>
            <li
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Send a Letter
            </li>
          </ul>
          <section className="outlet">
            {activeTab === "tab1" ? (
              <ReadMail
                setActiveTab={setActiveTab}
                user={props.user}
                mail={mail}
              />
            ) : (
              <SendMail user={props.user} />
            )}
          </section>
        </container>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
