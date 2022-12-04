import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contactme" className={styles.contactSection}>
      <div className="container">
        <div className="heading">
          <h2>Contact Me</h2>
          <span>Say Hello</span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="pb-4">
              <h3 className={styles.contactText}>Just say Hello !</h3>
              <span>Let us kow more about me !</span>
            </div>
            <Form>
              <div className="row">
                <div className="col-6">
                  <FormInput
                    label="First Name"
                    type="text"
                    name="firstname"
                    placeholder="first name"
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    label="Last Name"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="email address"
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    label="Phone Number"
                    type="text"
                    name="number"
                    placeholder="phone number"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label htmlFor="message" class={`form-label`}>
                  Message
                </label>
                <textarea name="" rows="4" className="form-control"></textarea>
              </div>
              <div className="">
                <button className="mainBtn">
                  Send <FaArrowRight />
                </button>
              </div>
            </Form>
          </div>
          <div className="col-md-4 offset-md-2 d-flex flex-column justify-content-center">
            <div className=" pt-4 pt-md-0">
              <h3 className={styles.contactText}>
                Contact <br /> Information
              </h3>
              <p className={styles.info}>
                77 Baker Street Bondowose. 984265 indonesia
              </p>
              <p>Call Us: 93242372346</p>
              <p className={styles.info}>
                We are open from Monday - Friday <br /> 08.00 am - 05.00 pm
              </p>
            </div>
            <div className="">
              <h3 className={styles.contactText}>Follow Us</h3>
              <div className={styles.icons}>
                <a href="/">
                  <FaFacebook />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
                <a href="/">
                  <FaGithub />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
