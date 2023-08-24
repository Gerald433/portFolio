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
        <li>
          <a href={"https://github.com/Gerald433"}>Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/g%C3%A9rald-gaillard-218664277/">
            Linkedin
          </a>
        </li>
        <li>CV</li>
        <li>Contact</li>
        <li>Message</li>
      </ul>

      <div className={`${styles.containerLinkFoot} d-flex`}>
        <LinkFooter
          src={linkLinkedin}
          href={"https://www.linkedin.com/in/g%C3%A9rald-gaillard-218664277/"}
        />
        <LinkFooter src={linkGithub} href={"https://github.com/Gerald433"} />
        <LinkFooter src={linkLetter} />
      </div>

      <p className={`${styles.copyrigth}`}>
        -Port Folio Développeur Web Gérald Gaillard-
      </p>
    </footer>
  );
}

export default Footer;
