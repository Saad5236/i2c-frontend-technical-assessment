import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import SkewedUnderline from "../../assets/images/skewed-underline-orange.png";
import SkewedUnderline2 from "../../assets/images/skewed-underline-orange-2.png";
import HeroImg from "../../assets/images/hero-main-img.png";
import HeroCardImg1 from "../../assets/images/hero-card-profile-img-1.png";
import HeroCardImg2 from "../../assets/images/hero-card-profile-img-2.png";
import HeroCardImg3 from "../../assets/images/hero-card-profile-img-3.png";
import LightBlueGradientBg from "../../assets/images/bg-light-blue-gradient.png";
import LockIcon from "../../assets/icons/padlock-yellow.svg";
import BarGraphIcon from "../../assets/icons/bargraph-colorful.svg";
import TrophyIcon from "../../assets/icons/trophy-yellow.svg";

function Home() {
  return (
    <div className="bg-lightest-grey">
      <Header />

      <main>
        <section className="home-hero-container">
          <div className="home-hero container pt-5 align-items-center">
            <div>
              <h1 className="mb-0 fw-bold">
                <span className="position-relative z-1">Lorem ipsum </span>
                <span className="hero-highlight-blue-word position-relative">
                  <span>dolor</span>
                  <img
                    className="position-absolute w-100 skewed-underline"
                    src={SkewedUnderline}
                    alt="skewed underline"
                  />
                </span>
                <span className="position-relative z-1"> sit amet yo 👋</span>
              </h1>

              <div className="hero-profile-cards d-flex flex-column gap-3 mt-5">
                <div className="hero-profile-card bg-white p-4 rounded-3 d-flex align-items-center gap-3">
                  <img className="rounded-circle" src={HeroCardImg1} alt="" />

                  <div className="flex-grow-1">
                    <h6 className="fs-14 mb-1 text-black">Andrew Shchultz</h6>
                    <p className="fs-14 mb-0 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae, in tristique senectus dui pharetra sit.
                    </p>
                  </div>
                </div>

                <div className="hero-profile-card bg-white p-4 rounded-3 d-flex align-items-center gap-3">
                  <img className="rounded-circle" src={HeroCardImg2} alt="" />

                  <div className="flex-grow-1">
                    <h6 className="fs-14 mb-1 text-black">Andrew Shchultz</h6>
                    <p className="fs-14 mb-0 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae, in tristique senectus dui pharetra sit.
                    </p>
                  </div>
                </div>

                <div className="hero-profile-card bg-white p-4 rounded-3 d-flex align-items-center gap-3">
                  <img className="rounded-circle" src={HeroCardImg3} alt="" />

                  <div className="flex-grow-1">
                    <h6 className="fs-14 mb-1 text-black">Andrew Shchultz</h6>
                    <p className="fs-14 mb-0 text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae, in tristique senectus dui pharetra sit.
                    </p>
                  </div>
                </div>

                <div className="hero-profile-card position-relative p-4 rounded-3"></div>
              </div>
            </div>

            <div>
              <img className="w-100" src={HeroImg} alt="main hero img" />
            </div>
          </div>
        </section>

        <section className="features-container">
          <div className="py-6 container">
            <div className="features rounded-3 bg-white d-flex flex-md-row flex-column gap-3">
              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={LockIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center">
                  <h6 className="m-0 text-primary">24/7 Support</h6>
                  <p className="m-0 text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>

              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={BarGraphIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center">
                  <h6 className="m-0 text-primary">1000+ of reviews</h6>
                  <p className="m-0 text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>

              <div className="feature-card d-flex align-items-center flex-grow-1 gap-3">
                <div className="flex-shrink-0">
                  <img width={55} src={TrophyIcon} alt="" />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center">
                  <h6 className="m-0 text-primary">And more!</h6>
                  <p className="m-0 text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="trusted-by">
            <h2 className="text-black mb-4 fw-800 text-center">
              <span className="position-relative">
                Trusted by
                <img
                  className="position-absolute"
                  src={SkewedUnderline2}
                  alt="skewed underline"
                />
              </span>
            </h2>
            <p className="mb-0 mx-auto text-center text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
              tristique senectus dui pharetra sit.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
