import styles from "./Footer.module.scss";
import linkLetter from "../assets/images/linkLetter.svg";
import LinkFooter from "./LinkFooter";
import linkLinkedin from "../assets/images/linkLinkedin.svg";
import linkGithub from "../assets/images/linkGithub.svg";
import { Link } from "react-router-dom";
// import cv from "../assets/images/CV.pdf";
import { useLocation } from "react-router-dom";
import { matchARoute } from "../routes";

function Footer() {
  const location = useLocation();

  if (!matchARoute(location.pathname)) return null;
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container} container d-flex`}>
        <div className={`${styles.linkText} d-flex`}>
          <span className={`${styles.icon}`}>gg.</span>
          <div>
            <ul>
              <p className={`${styles.titleLink}`}>Réseaux</p>
              <li>
                <Link to="https://github.com/Gerald433"
                target="_blank"
                rel="noopener noreferrer">
                  Github</Link>
              </li>
              <li>
                <Link 
                to="https://www.linkedin.com/in/g%C3%A9rald-gaillard-218664277/"
                target="_blank"
                rel="noopener noreferrer">
                  Linkedin
                </Link>
              </li>
              <li>
                <a
                  href="/images/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <p className={`${styles.titleLink}`}>Contact</p>
              <li>
                <Link to="/contact">Message</Link>
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
          <LinkFooter src={linkLetter} href={"/contact"} />
        </div>
      </div>
      <p className={`${styles.copyrigth} `}>Port Folio Gérald G.</p>
    </footer>
  );
}

export default Footer;
