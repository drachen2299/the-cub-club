import { useState } from "react";

const Avatar = () => {

  const [fur, setFur] = useState(0);
  // const [accessory, setAccessory] = useState(null);
  // const [color, setColor] = useState(null);

  const bearSubmit = (e) => {
    e.preventDefault();
    const newBear = {
      fur,
      // accessory,
      // color
    }
    
  }

  return (
    <form onSubmit={bearSubmit}>
      <label htmlFor="fur">Fur:</label>
      <select id="fur" onChange={(e) => setFur(e.target.valueAsNumber)}>
        <option value={0}>Brown Bear</option>
        <option value={1}>Black Bear</option>
        <option value={2}>Polar Bear</option>
        <option value={3}>Panda Bear</option>
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
