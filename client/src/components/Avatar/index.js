const Avatar = () => {
  return (
    <form>
      <label htmlFor="fur">Fur:</label>
      <input type="dropdown" />
      <label htmlFor="accessory"></label>
      <input type="text" />
      <label htmlFor="color"></label>
      <input type="text" />
      <button type="submit">Done!</button>
    </form>
  );
};

export default Avatar;
