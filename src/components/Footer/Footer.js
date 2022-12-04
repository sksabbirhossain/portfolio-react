import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>Copyright © 2022 StarSkSoft. All rights reserved.</p>
            </div>
            <div className="col-6">
              <div className={styles.footerPrivacy}>
                <a href="/" className="pe-3">
                  terms and conditions
                </a>
                <a href="/">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
