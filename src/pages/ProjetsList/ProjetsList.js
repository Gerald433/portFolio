import styles from "./ProjetsList.module.scss";
import React from "react";
import ProjectBox from "../../components/projectBox";
import blackPhone from "../../assets/images/black-phone.svg";
import whitePhone from "../../assets/images/white-phone.svg";
import blackTablet from "../../assets/images/black-tablette.svg";
import whiteTablet from "../../assets/images/white-tablette.svg";

const ProjetsList = function () {
  return (
    <>
      <div className={`${styles.top} container d-flex flex-column `}>
        <h1 className={`${styles.titlePrincipal} `}>I'm gérald g.</h1>
        <span className={`${styles.job} br`}>Développeur Web Front-end,</span>
        <span className={`${styles.specialisation} br`}>JavaScript - React.</span>
        <p className={`${styles.indications} `}>
          Explorez ci-dessous quelques exemples de mes réalisations, illustrant
          mon intéret pour le développement de solutions digitale pertinantes
        </p>
      </div>

      <div
        className={`${styles.presentationInFour} container d-flex justify-content-center align-items-center `}
      >
        <ProjectBox src={whitePhone} className={`${styles.ligth}`} />

        <ProjectBox src={blackTablet} className={styles.dark} />

        <ProjectBox src={whiteTablet} className={styles.ligth} />

        <ProjectBox src={blackPhone} className={styles.dark} />
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
        <ProjectBox src={whitePhone} className={`${styles.ligth}`} />

        <ProjectBox src={blackTablet} className={styles.dark} />
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
