import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import styles from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q8b7xen",
        "template_7oen9gr",
        form.current,
        "evQJQX5OUXzlsDexS"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message send Successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something wrong. Try again!");
        }
      );
  };
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
            <form ref={form} onSubmit={sendEmail}>
              <FormInput
                label="First Name"
                type="text"
                name="user_name"
                placeholder="first name"
                required
              />
              <div className="row">
                <div className="col-md-6">
                  <FormInput
                    label="Email"
                    type="email"
                    name="user_email"
                    placeholder="email address"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <FormInput
                    label="Phone Number"
                    type="text"
                    name="user_number"
                    placeholder="phone number"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className={`form-label`}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div className="">
                <button className="mainBtn">
                  Send <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4 offset-md-2 d-flex flex-column justify-content-center">
            <div className=" pt-4 pt-md-0">
              <h3 className={styles.contactText}>
                Contact <br /> Information
              </h3>
              <p className={styles.info}>Jessore, Khulna, Bangladesh.</p>
              <p>Call Us: +8801981688476</p>
              <p>Email: sksabbirhossain4@gmail.com</p>
              <p className={styles.info}>
                I am always open for work with you.
                <br /> 12.00 am - 12.00 pm
              </p>
            </div>
            <div className="">
              <h3 className={styles.contactText}>Follow Me</h3>
              <div className={styles.icons}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
