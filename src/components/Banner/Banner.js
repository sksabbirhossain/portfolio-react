import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./Banner.module.css";
import image from "../../images/bannerimg.png"

const Banner = () => {
  return (
    <div id="home" className={styles.banner}>
      <div className="container">
        <div className="row w-100 vh-100 align-items-center">
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <div className={`${styles.bannerIcons} pe-5`}>
                <a href="/www.facebook.com">
                  <FaLinkedin />
                </a>
                <a href="/www.facebook.com">
                  <FaGithub />
                </a>
                <a href="/www.facebook.com">
                  <FaFacebook />
                </a>
                <a href="/www.facebook.com">
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
                  <button className="mainBtn">
                    Download CV <FaArrowRight />
                  </button>
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
