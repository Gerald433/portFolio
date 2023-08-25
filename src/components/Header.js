import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import menuHeader from "../assets/images/menuHeader.svg";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className="container d-flex">
        <div className="d-flex flex-fill ">
          <span className={`${styles.icon} d-flex align-items-center`}>
            gg.
          </span>
          <ul className="d-flex align-items-center ">
            <li>
              <Link to="/">Projets</Link>
            </li>
            <li>
              <Link to="/a-propos">À propos</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.contactBox} d-flex align-items-center `}>
          <span className={`${styles.contact} d-flex align-items-center `}>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
