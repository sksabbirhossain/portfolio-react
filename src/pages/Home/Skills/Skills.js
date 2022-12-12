import React from "react";
import { FaAward, FaCoffee, FaDotCircle, FaFlag } from "react-icons/fa";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="heading">
          <h2>My Skills</h2>
          <span>My technical level</span>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <div className="">
              <h5 className={styles.skillsText}>My Skills</h5>
            </div>
            <div className="mt-4">
              <h6 className="dark-color">HTML5</h6>
              <div className="progress" style={{ height: "13px" }}>
                <div
                  className={`progress-bar ${styles.progressColor}`}
                  role="progressbar"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="my-3">
              <h6 className="dark-color">CSS3</h6>
              <div className="progress" style={{ height: "13px" }}>
                <div
                  className={`progress-bar ${styles.progressColor}`}
                  role="progressbar"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
            </div>
            <div className="my-3">
              <h6 className="dark-color">BOOTSTRAP</h6>
              <div className="progress" style={{ height: "13px" }}>
                <div
                  className={`progress-bar ${styles.progressColor}`}
                  role="progressbar"
                  style={{ width: "95%" }}
                >
                  95%
                </div>
              </div>
            </div>
            <div className="my-3">
              <h6 className="dark-color">JAVASCRIPT</h6>
              <div className="progress" style={{ height: "13px" }}>
                <div
                  className={`progress-bar ${styles.progressColor}`}
                  role="progressbar"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h6 className="dark-color">REACT JS</h6>
              <div className="progress" style={{ height: "13px" }}>
                <div
                  className={`progress-bar ${styles.progressColor}`}
                  role="progressbar"
                  style={{ width: "50%" }}
                >
                  50%
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5 className={`${styles.skillsText} pt-4`}>feature</h5>
            <div className="row">
              <div className="col-md-6 py-3" data-aos="fade-left">
                <div
                  className={`${styles.featureBox} d-flex justify-content-center align-items-center`}
                >
                  <div className={styles.icon}>
                    <FaDotCircle />
                  </div>
                  <div className="media-body">
                    <h5 className="m-0 ">80 Albumes Listened</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3" data-aos="fade-left">
                <div
                  className={`${styles.featureBox} d-flex justify-content-center align-items-center`}
                >
                  <div className={styles.icon}>
                    <FaAward />
                  </div>
                  <div className="media-body">
                    <h5 className="m-0 ">01 Awards Won</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3" data-aos="fade-left">
                <div
                  className={`${styles.featureBox} d-flex justify-content-center align-items-center`}
                >
                  <div className={styles.icon}>
                    <FaCoffee />
                  </div>
                  <div className="media-body">
                    <h5 className="m-0 ">1 000 Cups of coffee</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3" data-aos="fade-left">
                <div
                  className={`${styles.featureBox} d-flex justify-content-center align-items-center`}
                >
                  <div className={styles.icon}>
                    <FaFlag />
                  </div>
                  <div className="media-body">
                    <h5 className="m-0 ">01 Countries Visited</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
