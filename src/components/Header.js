import styles from "./Header.module.scss";
// import logo from "../assets/images/logo.jpg";

function Header() {
  return (
    <header className={`${styles.header} d-flex `}>
      <div className="d-flex flex-fill ">
        <span className={`${styles.icon} d-flex align-items-center`}>gg.</span>
        <ul className="d-flex align-items-center">
          <li>Projets</li>
          <li>A propos</li>
        </ul>
      </div>

      <span className={`${styles.contact} d-flex align-items-center`}>Contact</span>
    </header>
  );
}

export default Header;
