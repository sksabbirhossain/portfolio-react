import React from "react";
import { FaArrowRight, FaCode, FaColumns, FaPencilAlt } from "react-icons/fa";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className="container">
        <div className="heading">
          <h2>My Services</h2>
          <span>About my services</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={`${styles.serviceCard} shadow mb-4 mb-md-0`}>
              <div className={styles.icon}>
                <FaColumns />
              </div>
              <div className={styles.title}>
                <h4>
                  Ui/Ux <br />
                  Designer
                </h4>
              </div>
              <a href="/" className={styles.viewLink}>
                View More <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.serviceCard} shadow mb-4 mb-md-0`}>
              <div className={styles.icon}>
                <FaCode />
              </div>
              <div className={styles.title}>
                <h4>
                  Frontend <br />
                  Developer
                </h4>
              </div>
              <a href="/" className={styles.viewLink}>
                View More <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.serviceCard} shadow`}>
              <div className={styles.icon}>
                <FaPencilAlt />
              </div>
              <div className={styles.title}>
                <h4>
                  Backend <br />
                  Developer
                </h4>
              </div>
              <a href="/" className={styles.viewLink}>
                View More <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
