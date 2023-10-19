import styles from "./projectBox.module.scss";
import { Link } from "react-router-dom";
function ProjectBox({
  src,
  className,
  title,
  description,
  textAlt,
  type,
  projetId,
}) {
  const openProjectInNewTab = () => {
    const newWindow = window.open(`/projets/${projetId}`);
    newWindow.document.title = title;
  };

  return (
    <>
      <Link
        to={`/projets/${projetId}`}
        className={`${styles.box} ${className} d-flex flex-column  align-items-center`}
        target="_blank"
        onClick={openProjectInNewTab}
      >
        <span className={`${styles.formation}`}>{type}</span>
        <h2
          className={`${styles.title} d-flex flex-column justify-content-center `}
        >
          {title}
        </h2>
        <span className={`${styles.knowMore} `}>En savoir plus</span>
        <img className={`${styles.phoneBlack} `} src={src} alt={textAlt} />
      </Link>
    </>
  );
}

export default ProjectBox;
