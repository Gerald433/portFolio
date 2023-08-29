import styles from "./Footer.module.scss";
import linkLetter from "../assets/images/linkLetter.svg";
import LinkFooter from "./LinkFooter";
import linkLinkedin from "../assets/images/linkLinkedin.svg";
import linkGithub from "../assets/images/linkGithub.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container} container d-flex`}>
        <span className={`${styles.icon}`}>gg.</span>
        <div className={`${styles.linkText} d-flex `}>
          <div>
            <ul>
              <p className={`${styles.titleLink}`}>Réseaux</p>
              <li>
                <Link to="https://github.com/Gerald433">Github</Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/g%C3%A9rald-gaillard-218664277/">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link to="#">CV</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <p className={`${styles.titleLink}`}>Contact</p>
              <li>
                <Link to="#">Message</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.containerLinkFoot} d-flex `}>
          <LinkFooter
            src={linkLinkedin}
            href={"https://www.linkedin.com/in/g%C3%A9rald-gaillard-218664277/"}
          />
          <LinkFooter src={linkGithub} href={"https://github.com/Gerald433"} />
          <LinkFooter src={linkLetter} />
        </div>
      </div>
      <p className={`${styles.copyrigth}`}>
        Port Folio Développeur Web Gérald Gaillard
      </p>
    </footer>
  );
}

export default Footer;
