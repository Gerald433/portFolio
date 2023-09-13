import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import projets from "../../assets/data/projets.json";
import styles from "./Projet.module.scss";
import Item from "../../components/Item";

function Projet() {
  const { projetId } = useParams();
  console.log("ID du projet:", projetId);

  const projetsFinis = projets.ProjetsFinis;
  const projetsEnCours = projets.ProjetsEnCours;
  console.log("Projets finis:", projetsFinis);
  console.log("Projets en cours:", projetsEnCours);

  const projetFinis = projetsFinis.find((p) => p.id === projetId);
  const projetEnCours = projetsEnCours.find((p) => p.id === projetId);

  console.log("Projet fini trouvé:", projetFinis);
  console.log("Projet en cours trouvé:", projetEnCours);

  const projet = projetFinis || projetEnCours;

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
      <div className={` container d-flex flex-column `}>
        <section>
          <h1 className={`${styles.titleProjet}`}>{projet.title}</h1>

          <div className={`${styles.itemList} d-flex flex-column`}>
            {projet.technologies.map((tech, index) => (
              <Item
                key={index}
                className={`${styles.itemChildren} ${
                  index % 2 === 0 ? styles.small : styles.big
                } d-flex `}
              >
                <div>
                  <img
                    className={`${styles.logo}`}
                    src={tech.logo}
                    alt="logo html"
                  />
                  <span className={`${styles.techno}`}>{tech.nom}</span>
                </div>

                <span className={`${styles.rightbloc}`}>{tech.percent}</span>
              </Item>
            ))}
          </div>

          <div  className={` container d-flex`}>
            <img src={projet.pictures} alt="projet" />
            
            <ul  className={`${styles.specificationList}`}>
            {projet.specifications.map((specific, index) =>
             <li
             key={index}>
              {specific}
             </li>
            
            )}
            </ul>)
          </div>

          <p className={`${styles.description}`}>{projet.description}</p>
        </section>

        <Link to="/">liste de projets</Link>
      </div>
    </>
  );
}

export default Projet;
