import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section id="projects">
      <div className="container">
        <div className="heading">
          <h2>Projects</h2>
          <span>Most recent Work</span>
        </div>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={`${styles.sliderItems}`}>
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <div className="">
                      <img
                        src={project.thumbnail}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" pt-4 pt-md-0">
                      <h4 className={styles.sliderTitle}>
                        {project.title}
                      </h4>
                      <p>
                        {project.details}
                      </p>
                      <div className="mt-3 mb-5 mb-sm-0">
                        <Link to={`/project/${project.id}`} className="mainBtn">
                          Details <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
