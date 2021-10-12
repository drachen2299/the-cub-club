import { useState } from "react";
import { createBear } from "../../services";

const Avatar = (props) => {

  const [fur, setFur] = useState("brown");
  // const [accessory, setAccessory] = useState(null);
  // const [color, setColor] = useState(null);

  const bearSubmit = async (e) => {
    try {
    e.preventDefault();
    const newBear = {
      fur,
      // accessory,
      // color
    };
    const bear = await createBear(props.id, newBear);
  } catch (e) {
    console.error(e.message)
  }
    
  }

  return (
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
  );
};

export default Avatar;
