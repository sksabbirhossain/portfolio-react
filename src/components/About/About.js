import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className="heading">
          <h2>About Me</h2>
          <span>My Introduction</span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className=" d-flex align-items-center h-100 w-100">
              <img
                src="https://cdn.computercareers.org/wp-content/uploads/web-development.jpg"
                className="img-fluid rounded"
                alt=""
                style={{ width: "450px" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutText mt-5 mt-md-0">
              <p>
                Web developer, with extensive knowledge and years of experience,
                working in web technologies and ui / ux design delivering
                quality work. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Sapiente illum, et maiores quos voluptatem ad
                error perferendis sed ab! Error eius voluptatum minus? Quis
                magni laudantium, dolorum totam ipsam nesciunt.
              </p>
              <div className="row pt-4">
                <div className="col">
                  <h1 className="fw-bold">08+</h1>
                  <p>years</p>
                  <span>Experience</span>
                </div>
                <div className="col">
                  <h1 className="fw-bold">20+</h1>
                  <p>Completed</p>
                  <span>Projects</span>
                </div>
                <div className="col">
                  <h1 className="fw-bold">05+</h1>
                  <p>Companies</p>
                  <span>Worked</span>
                </div>
              </div>
              <div className="pt-4">
                <button className="mainBtn">
                  Download CV <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
