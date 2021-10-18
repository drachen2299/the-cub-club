import React from 'react';
import useKeyPress from "../../hooks/use-keypress";

const Controller = () => {
    
    const faker = (keyDown) => {window.addEventListener("keydown", (keyDown) => {
        if(keyDown.key === "w"){
            return;
        }
    })}


    return (
        <div>
            <div className="controller">
                <div></div>
                <div onClick={() => faker(87)}>up</div>
                <div></div>
                <div >left</div>
                <div></div>
                <div >right</div>
                <div></div>
                <div >down</div>
                <div></div>
            </div>
        </div>
    );
};

export default Controller;