import React, { useEffect, useState } from "react";
import { FaAlignRight, FaBeer, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState("light-theme");
  const [fiexdMenu, setFiexdMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);

  //fiexd menu
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 60) {
        setFiexdMenu(true);
      } else {
        setFiexdMenu(false);
      }
    });
  }, []);

  // change theme function
  const themeToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav
      className={
        fiexdMenu
          ? `navbar navbar-expand-lg ${styles.mainHeader} fixedHeader`
          : `navbar navbar-expand-lg ${styles.mainHeader} `
      }
    >
      <div className="container">
        <HashLink className={`navbar-brand ${styles.logo}`} to="/#home">
          StarSk<span className={styles.logoColor}>Soft</span>
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <>
              <span>
                {" "}
                <FaAlignRight />
              </span>
            </>
          ) : (
            "X"
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${
            mobileMenu ? "" : styles.mobileMenu
          }`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <HashLink className="nav-link" to="/#home">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#about">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#skills">
                Skills
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#services">
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#projects">
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contactme">
                Contactme
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/blogs">
                Blogs
              </HashLink>
            </li>
            <li className="nav-item " onClick={() => themeToggle()}>
              {theme === "light-theme" ? (
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
