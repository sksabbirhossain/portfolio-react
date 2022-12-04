import React, { useState } from "react";
import { FaBeer, FaMoon, FaSun } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState(false);
  return (
    <nav class={`navbar navbar-expand-lg ${styles.mainHeader}`}>
      <div class="container">
        <a class={`navbar-brand ${styles.logo}`} href="#home">
          StarSk<span className={styles.logoColor}>Soft</span>
        </a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contactme">
                Contactme
              </a>
            </li>
            <li class="nav-item" onClick={() => setTheme(!theme)}>
              {theme ? (
                <>
                  <a class="nav-link" href="#light">
                    <FaSun />
                  </a>
                </>
              ) : (
                <>
                  <a class="nav-link" href="#dark">
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
