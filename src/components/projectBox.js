import styles from "./projectBox.module.scss";

function ProjectBox({ src, className, title, description }) {
  return (
    <>
      <div
        className={`${styles.box} ${className} d-flex flex-column  align-items-center`}
      >
        <span className={`${styles.formation}`}>FORMATION</span>
        <h2
          className={`${styles.title} d-flex flex-column justify-content-center`}
        >
          {title}
        </h2>
        <span className={`${styles.knowMore} `}>En savoir plus</span>
        <img
          className={`${styles.phoneBlack} `}
          src={src}
          alt="dessin d'un téléphone noir"
        />
      </div>
    </>
  );
}

export default ProjectBox;
