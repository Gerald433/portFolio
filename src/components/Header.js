import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.jpg";

function Header() {
  return (
    <header className={`${styles.header} d-flex `}>
      <div className="d-flex flex-fill ">
        <span className={`${styles.icon} d-flex align-items-center`}>gg.</span>
        <ul className="d-flex align-items-center">
          <li>
            <Link to="/">Projets</Link>
          </li>
          <li>
            <Link to="/a-propos">À propos</Link>
          </li>
        </ul>
      </div>

      <span className={`${styles.contact} d-flex align-items-center`}>
        <Link to="/contact">Contact</Link>
      </span>
    </header>
  );
}

export default Header;
