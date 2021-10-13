import { useState } from "react";
import brownBear from './creation-assets/brown-bear-front.png';
import blackBear from './creation-assets/black-bear-front.png';
import whiteBear from './creation-assets/white-bear-front.png';
import pandaBear from'./creation-assets/panda-bear-front.png';
import { createBear } from "../../services";
import { useHistory } from "react-router";

const Avatar = (props) => {
  const [fur, setFur] = useState("brown");
  const history = useHistory();
  // const [accessory, setAccessory] = useState(null);
  // const [color, setColor] = useState(null);
  const { id } = props.user;
  const bearSubmit = async (e) => {
    try {
    e.preventDefault();
    const newBear = {
      fur,
      // accessory,
      // color
    };
    const bear = await createBear(id, newBear);
    console.log(newBear)
    // push user to game room
    history.push("/game");
  } catch (e) {
    console.error(e.message)
  }
    
  }

  return (
    <container>
    <form onSubmit={bearSubmit}>
      <label htmlFor="fur">Fur:</label>
      <select id="fur" onChange={(e) => setFur(e.target.value)}>
        <option value={"brown"}>Brown Bear</option>
        <option value={"black"}>Black Bear</option>
        <option value={"white"}>Polar Bear</option>
        <option value={"panda"}>Panda Bear</option>
      </select>
      {/* <label htmlFor="accessory">Accessory:</label>
      <select id="accessory">
        <option></option>
      </select>
      <label htmlFor="color">Color:</label>
      <select id="color">
        <option></option>
      </select> */}
      <button type="submit">Done!</button>
    </form>
    <img
    src={fur === "brown" ? (
      brownBear
    ) : fur === "black" ? (
       blackBear
    ) : fur === "white" ? (
       whiteBear
    ) : (
       pandaBear
    )}/>
    </container>
  );
};

export default Avatar;
