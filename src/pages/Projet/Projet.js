import { Link } from "react-router-dom";

function Projet() {
  return (
    <>
      <h1>Ici c'est le projet sélectionné</h1>

      <Link to="/">liste de projets</Link>
    </>
  );
}

export default Projet;
