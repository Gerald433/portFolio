import styles from "./Footer.module.scss";
import linkLetter from "../assets/images/linkLetter.svg";
import LinkFooter from "./LinkFooter";
import linkLinkedin from "../assets/images/linkLinkedin.svg";
import linkGithub from "../assets/images/linkGithub.svg";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <span className={`${styles.icon}`}>gg.</span>
      <ul className={`${styles.connections} d-flex flex-column`}>
        <li>Réseaux</li>
        <li>Github</li>
        <li>Linkedin</li>
        <li>CV</li>
        <li>Contact</li>
        <li>Message</li>
      </ul>

      <div className={`${styles.containerLinkFoot} d-flex`}>
        <LinkFooter src={linkLinkedin} />
        <LinkFooter src={linkGithub} />
        <LinkFooter src={linkLetter} />
      </div>

      <p className={`${styles.copyrigth}`}>Port-Folio Gérald Gaillard</p>
    </footer>
  );
}

export default Footer;
