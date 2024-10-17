import React from "react";
import { Link } from "react-router-dom";

import CompanyLogo from "../assets/images/logo.png";
import OrangeGlowBtn from "./OrangeGlowBtn";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-nav py-4 d-flex flex-md-row flex-column justify-content-between align-items-center gap-md-0 gap-4">
          <Link className="navbar-brand" to="#">
            <img width={50} src={CompanyLogo} alt="logo" />
          </Link>

          <ul className="footer-nav-items m-0 d-flex flex-sm-row flex-column align-items-center gap-4 p-0">
            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark"
                aria-current="page"
                to="#"
              >
                About us
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark"
                aria-current="page"
                to="#"
              >
                Registration
              </Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <Link
                className="nav-link p-0 text-dark"
                aria-current="page"
                to="#"
              >
                Careers
              </Link>
            </li>

            <OrangeGlowBtn toLink={"#"}>Contact us</OrangeGlowBtn>
          </ul>
        </div>
        <div className="copyright-text text-end text-dark">
          Copyright © 2024 i2c inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
