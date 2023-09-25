import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import projets from "../../assets/data/projets.json";
import styles from "./Projet.module.scss";
import Item from "../../components/Item";
import logoListItem from "../../assets/images/itemList.svg";
import hat from "../../assets/images/hat.svg";
import hat2 from "../../assets/images/hat2.svg";

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
          <div className={`${styles.boxLogos} d-flex `}>
            {projet.technologies.map((techno, index) => (
              <img key={index} src={techno.logo} alt="gtrg" />
            ))}
          </div>

          <div className={`${styles.itemList} d-flex flex-column `}>
            {projet.technologies.map((tech, index) => (
              <Item
                key={index}
                className={`${styles.itemChildren} ${
                  index % 2 === 0 ? styles.small : styles.big
                } d-flex `}
              >
                <div
                  className={`${styles.logoItemBox} d-flex align-items-center`}
                >
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

          <div className={`${styles.middleBox} container d-flex `}>
            <div className={`${styles.boxPicture1} d-flex `}>
              <img className={`${styles.hat}`} src={hat} alt="entete" />
              <img
                className={`${styles.firstImg}`}
                src={projet.pictures1}
                alt="projet 1"
              />
            </div>
            <ul className={`${styles.specificationList}`}>
              {projet.specifications.map((specific, index) => (
                <li key={index}>
                  <img className={`${styles.checkList}`} src={logoListItem} alt="logo de list" />
                  {specific}
                </li>
              ))}
            </ul>
            )
          </div>

          <p className={`${styles.description} `}>{projet.description}</p>
          <div className={`${styles.boxPicture2} d-flex`}>
            <img className={`${styles.hat2}`} src={hat2} alt="entete" />
            <img
              className={`${styles.secondImg}`}
              src={projet.pictures2}
              alt="projet 2"
            />
          </div>
        </section>

        <section className={`d-flex flex-column `}>
          <h2 className={`${styles.titleSection}`}>Section 2</h2>

          <div className={`${styles.boxEvaluation} `}>
            <span className={`${styles.evaluator}`}>Evaluateur(trice)s</span>
            <span className={`${styles.evaluatorJob}`}>
              Développeur web FullStack
            </span>
            <span className={`${styles.evaluatorDate}`}>
              le 10 Janvier 2022
            </span>
            <p className={`${styles.evaluation} `}>{projet.evaluation}</p>
          </div>
        </section>

        <Link to="/">liste de projets</Link>
      </div>
    </>
  );
}

export default Projet;
