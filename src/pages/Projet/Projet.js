import React from "react";
import { Link } from "react-router-dom";

function Projet(title, description, image) {
  return (
    <>
      <h1>{title}</h1>

      <Link to="/">liste de projets</Link>
    </>
  );
}

export default Projet;
