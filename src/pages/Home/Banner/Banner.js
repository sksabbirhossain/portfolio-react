import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div id="home" className={styles.banner}>
      <div className="container">
        <div className="row w-100 vh-100 align-items-center">
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <div className={`${styles.bannerIcons} pe-5`}>
                <a
                  href="https://www.linkedin.com/in/sk-sabbir-hossain/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/sksabbirhossain"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/sksabbirhossain4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/sk.sabbir.hossain/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="bannerText">
                <h1 className="fw-bold">Hi I'am Sabbir Hossain</h1>
                <h5>Frontend developer</h5>
                <span className="d-block pt-2">
                  High lavel experience in web design and <br /> development
                  knowledge, producing <br /> quality work.
                </span>
                <div className="mt-3">
                  <a href="/Resume.pdf" download="/Resume.pdf">
                    <button className="mainBtn">
                      Download Resume <FaArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
