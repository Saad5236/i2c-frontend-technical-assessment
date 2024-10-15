import React from 'react'
import { Link } from 'react-router-dom'

import CompanyLogo from "../assets/images/logo.png"
import OrangeGlowBtn from './OrangeGlowBtn'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-transparent py-4">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <img width={50} src={CompanyLogo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-0 mt-md-0 mt-3 mb-lg-0 gap-4 align-items-center">
                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link p-0 text-dark" aria-current="page" to="#">About us</Link>
                            </li>

                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link p-0 text-dark" aria-current="page" to="#">Registration</Link>
                            </li>

                            <li className="nav-item d-flex align-items-center">
                                <Link className="nav-link p-0 text-dark" aria-current="page" to="#">Careers</Link>
                            </li>

                            <OrangeGlowBtn toLink={"#"}>Contact us</OrangeGlowBtn>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
