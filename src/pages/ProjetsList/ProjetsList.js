import styles from "./ProjetsList.module.scss";
import React from "react";

import ProjectBox from "../../components/projectBox";
// import blackPhone from "../../assets/images/black-phone.svg";
// import whitePhone from "../../assets/images/white-phone.svg";
// import blackTablet from "../../assets/images/black-tablette.svg";
// import whiteTablet from "../../assets/images/white-tablette.svg";
import projetsComplet from "../../assets/data/projets.json";

const ProjetsList = function () {
  const projetsOnDisplay = projetsComplet.ProjetsFinis.filter(
    (projet) => projet.display === "yes"
  );
  const projetsPersoOnDisplay = projetsComplet.ProjetsEnCours.filter(
    (projet) => projet.display === "yes"
  );

  return (
    <>
      <div className={`${styles.top} container d-flex flex-column `}>
        <h1 className={`${styles.titlePrincipal} `}>
          I'm <br />
          gerald g.
        </h1>
        {console.log("salut")}
        <span className={`${styles.job} `}>Developpeur Web Front-end,</span>
        <span className={`${styles.specialisation} `}>JavaScript - React.</span>
        <p className={`${styles.indications} `}>
          Explorez ci-dessous quelques exemples de mes réalisations, illustrant
          mon intéret pour le développement de solutions digitale pertinantes
        </p>
      </div>

      <div
        className={`${styles.presentationInFour} container d-flex justify-content-center align-items-center`}
      >
        {projetsOnDisplay.map((projet, index) => (
          <ProjectBox
            key={projet.id}
            projetId={projet.id}
            type={projet.type}
            title={projet.title}
            src={projet.instrument}
            textAlt={projet.textAlt}
            className={index % 2 === 0 ? styles.ligth : styles.dark}
          />
        ))}
      </div>

      <div className={`${styles.middle} container d-flex flex-column `}>
        <h2 className={`${styles.middleTitle}`}>En cours</h2>
        <span className={`${styles.middleIndications} `}>
          Découvrez mes projets de développement web en cours,
        </span>
      </div>

      <div
        className={`${styles.presentationInFour} container d-flex justify-content-center align-items-center `}
      >
        {projetsPersoOnDisplay.map((projet, index) => (
          <ProjectBox
            key={projet.id}
            projetId={projet.id}
            type={projet.type}
            title={projet.title}
            src={projet.instrument}
            textAlt={projet.textAlt}
            className={index % 2 === 0 ? styles.ligth : styles.dark}
          />
        ))}
        {/* <ProjectBox  className={`${styles.ligth}`} />

        <ProjectBox  className={styles.dark} /> */}
      </div>

      <p className={`${styles.finalParagraph} container d-flex flex-column `}>
        Ces projets ne sont que quelques-uns parmi les plus significatifs que
        j'ai réalisés. Mon portfolio complet est disponible sur mon profil
        GitHub, où vous pouvez explorer une variété de réalisations techniques.
        N'hésitez pas à jeter un coup d'œil à l'ensemble de mon travail et à mes
        contributions.
      </p>
    </>
  );
};

export default ProjetsList;
