import styles from "./Apropos.module.scss";
import avatar from "../../assets/images/Avatar.svg";

function Apropos() {
  return (
    <>
      <div className={`${styles.top} container d-flex flex-column `}>
        <h1 className={`${styles.titlePrincipal} `}>I'm gérald g.</h1>
        <div className={`${styles.blocPrincipal} container d-flex  `}>
          <img src={avatar} alt="Ma présentation" />
          <div className={`${styles.blocText} container d-flex flex-column `}>
            <span className={`${styles.job} br`}>
              Développeur Web Front-end,
            </span>
            <span className={`${styles.specialisation} br`}>
              JavaScript - React.
            </span>
            <p className={`${styles.indications} `}>
              Je crée des solutions web fonctionnelles et engageantes, donnant
              vie aux idées numériques.<br/><br/><br/> Mon objectif est de répondre aux besoins
              tout en garantissant une expérience utilisateur fluide et
              captivante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apropos;
