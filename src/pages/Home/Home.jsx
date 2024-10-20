import React, { useContext, useState } from "react";
import HomeLayout from "../../layouts/HomeLayout.jsx";
import { RegistrationContext } from "../../contexts/RegistrationContext.jsx";

import SkewedUnderline from "../../assets/images/skewed-underline-orange.png";
import SkewedUnderline2 from "../../assets/images/skewed-underline-orange-2.png";
import HeroImg from "../../assets/images/hero-main-img.png";
import LockIcon from "../../assets/icons/padlock-yellow.svg";
import BarGraphIcon from "../../assets/icons/bargraph-colorful.svg";
import TrophyIcon from "../../assets/icons/trophy-yellow.svg";
import RegistrationMainImg from "../../assets/images/form-aside-main-img.png";
import TrustedByGradientBg from "../../assets/images/trusted-by-gradient-bg.png";
import RegistrationBgBlueGradient from "../../assets/images/registration-form-bg-blue-gradient.png";
import FeaturesOrangeGradientBg from "../../assets/images/features-bg-yellow-gradient.png";
import FeaturesBlueGradientBg from "../../assets/images/features-bg-blue-gradient.png";

import OrangeGlowBtn from "../../components/OrangeGlowBtn";
import RegistrationForm from "./RegistrationForm";
import ImagesCarousel from "./ImagesCarousel.jsx";
import HeroVerticalSlider from "./HeroVerticalSlider.jsx";

function Home() {
  const { registrationData } = useContext(RegistrationContext);

  return (
    <HomeLayout>
      <main className="mb-5">
        <section className="home-hero-container">
          <div className="home-hero container pt-6 align-items-center">
            <div>
              <h1 className="mb-0 fw-bold text-md-start text-center">
                <span className="position-relative z-1">Lorem ipsum </span>
                <span className="position-relative">
                  <span className="hero-highlight-blue-word position-relative">
                    <span className="position-relative z-2 text-sky-blue">dolor</span>
                    <img
                      className="position-absolute z-2 w-100 skewed-underline"
                      src={SkewedUnderline}
                      alt="skewed underline"
                    />
                    <span className="bg-blue-gradient-glow d-block"></span>
                  </span>
                </span>
                <span className="position-relative z-1"> sit amet yo 👋</span>
              </h1>

              <div className="d-md-none d-block">
                <img className="w-100" src={HeroImg} alt="main hero img" />
              </div>

              <HeroVerticalSlider />
            </div>

            <div className="d-md-block d-none">
              <img className="w-100" src={HeroImg} alt="main hero img" />
            </div>
          </div>
        </section>

        <section className="features-container overflow-visible">
          <div className="container position-relative overflow-visible">
            <img
              src={FeaturesOrangeGradientBg}
              className="features-orange-gradient-bg position-absolute"
              alt="features yellow gradient bg"
            />
            <img
              src={FeaturesBlueGradientBg}
              className="features-blue-gradient-bg position-absolute"
              alt="features blue gradient bg"
            />
            <div className="features rounded-3 bg-white d-flex flex-md-row flex-column gap-3 position-relative">
              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={LockIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center fs-14">
                  <h3 className="mb-1 text-primary fw-medium fs-14">
                    24/7 Support
                  </h3>
                  <p className="m-0 text-dark fw-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>

              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={BarGraphIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center fs-14">
                  <h3 className="mb-1 text-primary fw-medium fs-14">
                    1000+ of reviews
                  </h3>
                  <p className="m-0 text-dark fw-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>

              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={TrophyIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center fs-14">
                  <h3 className="mb-1 text-primary fw-medium fs-14">And more!</h3>
                  <p className="m-0 text-dark fw-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="trusted-by container pb-6">
            <div className="position-relative z-2">
              <h2 className="text-black mb-4 fw-800 text-center position-relative">
                <span className="position-relative">
                  Trusted by
                  <img
                    className="position-absolute"
                    src={SkewedUnderline2}
                    alt="skewed underline"
                  />
                </span>
              </h2>
              <p className="mb-4 mx-auto fs-14 fw-medium text-center text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
                in tristique senectus dui pharetra sit.
              </p>
            </div>

            <div className="position-relative z-1">
              <img
                className="trusted-by-gradient-bg position-absolute z-0"
                src={TrustedByGradientBg}
                alt=""
              />
              <ImagesCarousel />
            </div>
          </div>
        </section>

        <section className="position-relative z-1">
          <img
            className="registration-bg-gradient position-absolute translate-middle-x z-0"
            src={RegistrationBgBlueGradient}
            alt=""
          />
          <div className="registration container align-items-center position-relative z-1">
            <div>
              <img
                className="w-100"
                src={RegistrationMainImg}
                alt="main hero img"
              />
            </div>

            {registrationData ? (
              <div className="registration-form-success px-lg-5 px-3 rounded-3 d-flex flex-column justify-content-between bg-white">
                <h2 className="text-green fw-800 mb-3">Registration</h2>
                <p className="mb-0 fs-14">
                  Hi {registrationData.username}, thanks for registering.
                  Somebody will contact you soon.
                </p>
              </div>
            ) : (
              <RegistrationForm />
            )}
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}

export default Home;
