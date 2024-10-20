import React, { useEffect, useState } from "react";
import OrangeGlowBtn from "./OrangeGlowBtn";
import CompanyLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the toggle state
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu open state
  };

  return (
    <header className={`position-sticky top-0 start-0 bg-lightest-grey pb-3 pt-md-5 pt-4 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand" to="#">
             <img width={50} src={CompanyLogo} alt="logo" />
           </Link>

        <button onClick={toggleMenu} className="hamburger-menu-btn d-md-none ms-auto bg-transparent p-0 border-0">
          ☰
        </button>

        <nav>
          <ul
            className={`bg-lightest-grey m-0 nav-items list-unstyled pb-md-0 pb-4 ${
              isOpen ? "open" : ""
            } d-md-flex flex-md-row flex-column align-items-center`}
          >
            <li>
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                className="nav-link p-0 text-dark fs-14"
                aria-current="page"
                to="#"
              >
                Careers
              </Link>
            </li>
            <li>
              <OrangeGlowBtn extraClasses={"fs-14"} toLink={"#"}>
                Contact us
              </OrangeGlowBtn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
