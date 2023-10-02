import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { matchARoute } from "../routes";

function Header() {
  const location = useLocation();

  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function closeMenu() {
    setMenuVisible(false);
  }

  if (!matchARoute(location.pathname)) return null;

  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.container} container d-flex`}>
        <div className="d-flex flex-fill ">
          <span className={`${styles.icon} d-flex align-items-center`}>
            gg.
          </span>
          <nav className={`${styles.nav}`}>
            <ul className={`${styles.nav} d-flex align-items-center`}>
              <li>
                <Link
                  className={
                    "d-flex align-items-center" +
                    (location.pathname === "/" ? ` ${styles.linkActive}` : "")
                  }
                  to="/"
                >
                  Projets
                  <svg
                    className={styles.chevronHeader}
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7518 0.018375C6.45961 -0.0581875 6.15539 0.0965 6.07117 0.362125L3.87117 7.36213C3.78695 7.62775 3.95711 7.90431 4.2493 7.98088C4.54148 8.05744 4.8457 7.90275 4.92992 7.63713L7.12992 0.637125C7.21414 0.3715 7.04398 0.0949375 6.7518 0.018375ZM8.13711 1.89494C7.92227 2.09025 7.92227 2.40744 8.13711 2.60275L9.67195 3.99963L8.13539 5.3965C7.92055 5.59181 7.92055 5.909 8.13539 6.10431C8.35023 6.29963 8.69914 6.29963 8.91398 6.10431L10.839 4.35431C11.0538 4.159 11.0538 3.84181 10.839 3.6465L8.91398 1.8965C8.69914 1.70119 8.35023 1.70119 8.13539 1.8965L8.13711 1.89494ZM2.8657 1.89494C2.65086 1.69963 2.30195 1.69963 2.08711 1.89494L0.162109 3.64494C-0.0527344 3.84025 -0.0527344 4.15744 0.162109 4.35275L2.08711 6.10275C2.30195 6.29806 2.65086 6.29806 2.8657 6.10275C3.08055 5.90744 3.08055 5.59025 2.8657 5.39494L1.32914 3.99963L2.8657 2.60275C3.08055 2.40744 3.08055 2.09025 2.8657 1.89494Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  className={
                    location.pathname === "/a-propos"
                      ? ` ${styles.linkActive}`
                      : ""
                  }
                  to="/a-propos"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`d-flex align-items-center `}>
          <span className={`${styles.contact} d-flex align-items-center `}>
            <Link
              className={
                location.pathname === "/contact" ? ` ${styles.linkActive}` : ""
              }
              to="/contact"
            >
              Contact
            </Link>
          </span>
        </div>

        <div
          className={`${styles.menuMobile} ${
            menuVisible ? styles.clicked : ""
          }`}
          onClick={toggleMenu}
        >
          <span className={`${styles.bar}`}></span>
        </div>
        <div className={`${menuVisible ? styles.menuVisible : "hidden"}`}>
          <ul className={`${styles.listMenuMobile} d-flex flex-column`}>
            <li>
              <Link
                className={
                  "d-flex align-items-center w_link_no_underscore" +
                  (location.pathname === "/" ? ` ${styles.linkActive}` : "")
                }
                to="/"
                onClick={closeMenu}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                className={
                  "w_link_no_underscore" +
                  (location.pathname === "/a-propos"
                    ? ` ${styles.linkActive}`
                    : "")
                }
                to="/a-propos"
                onClick={closeMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                className={
                  "w_link_no_underscore" +
                  (location.pathname === "/contact"
                    ? ` ${styles.linkActive}`
                    : "")
                }
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
