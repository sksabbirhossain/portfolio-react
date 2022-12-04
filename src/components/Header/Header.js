import React, { useEffect, useState } from "react";
import { FaBeer, FaMoon, FaSun } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [fiexdMenu, setFiexdMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 60) {
        setFiexdMenu(true);
      } else {
        setFiexdMenu(false);
      }
    });
  }, []);
  return (
    <nav
      className={
        fiexdMenu
          ? `navbar navbar-expand-lg ${styles.mainHeader} fixedHeader`
          : `navbar navbar-expand-lg ${styles.mainHeader} `
      }
    >
      <div className="container">
        <a className={`navbar-brand ${styles.logo}`} href="#home">
          StarSk<span className={styles.logoColor}>Soft</span>
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">
                Contactme
              </a>
            </li>
            <li className="nav-item " onClick={() => setTheme(!theme)}>
              {theme ? (
                <>
                  <a className="nav-link active" href="#light">
                    <FaSun />
                  </a>
                </>
              ) : (
                <>
                  <a className="nav-link active" href="#dark">
                    <FaMoon />
                  </a>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
