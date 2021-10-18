import { useState } from "react";
import SendMail from "../SendMail";
import ReadMail from "../ReadMail";

const Modal = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");


  const handleTab1 = () => setActiveTab("tab1");
  const handleTab2 = () => setActiveTab("tab2");


  return (
    <div>
      {props.showModal ? (
        <container className="Modal">
          <button
            onClick={() => props.setShowModal((curr) => !curr)}
            className="ExitButton"
          >
            X
          </button>
          <ul className="tab-nav">
            <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Check Mail</li>
            <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Send a Letter</li>
          </ul>
          <section className="outlet">
            {activeTab === "tab1" ? 
            <ReadMail setActiveTab={setActiveTab} user={props.user}/>
            : <SendMail user={props.user} />}
          </section>
        </container>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
