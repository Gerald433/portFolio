import React from "react";
// import { useLocation } from "react-router-dom";
import astro from "../../assets/images/astronaute.png";
import styles from "./Error.module.scss";

function Error() {
  const maskHeaderFooter = false;
  return maskHeaderFooter ? null : (
    <>
      <section className={`${styles.sect} d-flex`}>
        <div className={`${styles.general} d-flex flex-column`}>
          <div></div>
          <span className={`${styles.number}`}>404</span>
          <h1>Page non trouvee</h1>
          <p className={`${styles.message}`}>
            Oh non, il semble que la page que vous cherchez soit introuvable.
            Peut-être qu'elle s'est égarée quelque part en ligne ?
          </p>
          <a className={`${styles.back}`} href="/">
            RETOUR
          </a>
        </div>
        <img
          className={`${styles.spaceAstro}`}
          src={astro}
          alt="astronaute perdu dans l'espace"
        />
      </section>
    </>
  );
}

export default Error;
