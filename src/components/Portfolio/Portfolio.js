import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
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
        <SwiperSlide>
          <div className={`${styles.sliderItems}`}>
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="">
                    <img
                      src="https://cdn.dribbble.com/users/1250068/screenshots/9174002/media/5cf2aefe878528cb59c57b5f91f70ed6.png?compress=1&resize=400x300&vertical=top"
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" pt-4 pt-md-0">
                    <h4 className={styles.sliderTitle}>
                      Daily Food - food dalivery services
                    </h4>
                    <p>
                      I am providing food dalivery services. I cook all my food
                      at my home. I try to keep my diet very good . i also
                      deliver the ordered food the order's home. and i didn't
                      charge extra for that.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://daily-food-1dafd.web.app/"
                        className="mainBtn"
                      >
                        View <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.sliderItems}`}>
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="">
                    <img
                      src="https://media.istockphoto.com/vectors/tell-a-friend-vector-website-template-web-page-and-landing-page-for-vector-id1138225247?k=20&m=1138225247&s=612x612&w=0&h=PfSzqOhVxVau8FAKTMod_JXWo9sEeXaTHbT6YDJz4Qs="
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" pt-4 pt-md-0">
                    <h4 className={styles.sliderTitle}>
                      E-Learning - for build your knowlage
                    </h4>
                    <p>
                      reactjs is used to create Client Side. and express js to
                      used to Server Side. and used react-bootstrap only for the
                      header. also, used react-router-dom(v6) for routing.
                      design all pages by bootstrap 5.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://e-learning-91ee1.web.app/"
                        className="mainBtn"
                      >
                        View <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
