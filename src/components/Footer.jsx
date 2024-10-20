import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CompanyLogo from "../assets/images/logo.png";
import OrangeGlowBtn from "./OrangeGlowBtn";

function Footer() {
  return (
    <footer>
      <div className="container pb-4">
        <div className="footer-nav py-4 d-flex flex-md-row flex-column justify-content-between align-items-center gap-md-0 gap-4">
          <Link className="navbar-brand" to="#">
            <img width={50} src={CompanyLogo} alt="logo" />
          </Link>

          <ul className="footer-nav-items list-unstyled m-0 d-flex flex-sm-row flex-column align-items-center p-0">
            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                FAQs
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                Privacy Policy
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                Other
              </Link>
            </li>

            <li>
              <OrangeGlowBtn toLink={"#"} extraClasses={"fs-14"}>
                Contact us
              </OrangeGlowBtn>
            </li>
          </ul>
        </div>
        <div className="copyright-text text-md-end text-center text-dark">
          Copyright © 2024 i2c inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
