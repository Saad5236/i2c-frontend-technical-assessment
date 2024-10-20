import React from "react";

import HeroCardImg1 from "../../assets/images/hero-card-profile-img-1.png";
import HeroCardImg2 from "../../assets/images/hero-card-profile-img-2.png";
import HeroCardImg3 from "../../assets/images/hero-card-profile-img-3.png";

function HeroVerticalSlider() {
  const data = [
    {
      imgSrc: HeroCardImg1,
      name: "Andrew Shchultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },

    {
      imgSrc: HeroCardImg2,
      name: "Andrew Shchultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },

    {
      imgSrc: HeroCardImg3,
      name: "Andrew Shchultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },

    {
      imgSrc: HeroCardImg1,
      name: "Andrew Shchultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    },

    {
      imgSrc: HeroCardImg3,
      name: "Andrew Shchultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
    }
  ]

  return (
    <div className="hero-profile-cards-wrapper">
      <div
        tabIndex={0}
        className="hero-profile-cards d-flex flex-column gap-3 mt-5 position-relative z-2"
      >
        {
          data.map((item, index) => (
            <div key={index} className="hero-profile-card p-md-4 p-3 rounded-3 d-flex align-items-center gap-3">
          <img className="rounded-circle" src={item.imgSrc} alt={item.name} />

          <div className="flex-grow-1">
            <div className="fs-14 fw-medium mb-1 text-black">
              {item.name}
            </div>
            <p className="fs-14 mb-0 text-dark fw-medium">
              {item.text}
            </p>
          </div>
        </div>
          ))
        }

      </div>
    </div>
  );
}

export default HeroVerticalSlider;
