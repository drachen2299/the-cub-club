import { deleteLetter } from "../../services/letters";

const Letter = (props) => {
  const handleDelete = async (letterId) => {
    try {
      await deleteLetter(letterId);
    } catch (e) {
      console.error(e.message)
    }
  };
  

  return (
    <article>
      
    </article>
  );
};

export default Letter;