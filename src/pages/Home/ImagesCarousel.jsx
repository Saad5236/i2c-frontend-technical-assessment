import React, {useState, useEffect} from 'react'

import ChevronRightBlue from "../../assets/icons/chevron-right-blue.svg";
import ChevronLeftBlue from "../../assets/icons/chevron-left-blue.svg";
import MicrosoftLogo from "../../assets/images/microsoft.svg?react";
import CocacolaLogo from "../../assets/images/coca-cola.svg?react";
import TwitterLogo from "../../assets/images/twitter.svg?react";

function ImagesCarousel() {

      const slides = [
        {
          img: <MicrosoftLogo style={{ width: 220 }} />,
        },
        {
          img: <TwitterLogo style={{ width: 100 }} />,
        },
        {
          img: <CocacolaLogo style={{ width: 220 }} />,
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0)
      const [visibleSlidesCount, setVisibleSlidesCount] = useState(3) // Default to 3 slides visible
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        )
      }
    
      const getVisibleSlides = () => {
        const visibleSlides = []
        for (let i = 0; i < visibleSlidesCount; i++) {
          const index = (currentIndex + i) % slides.length
          visibleSlides.push({
            ...slides[index],
            isActive: i === Math.floor(visibleSlidesCount / 2), // Center slide is active
          })
        }
        return visibleSlides
      }
    
      useEffect(() => {
        const handleResize = () => {
          setVisibleSlidesCount(window.innerWidth < 768 ? 1 : 3)
        }
    
        window.addEventListener("resize", handleResize)
    
        handleResize()
    
        
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }, [])

  return (
    <div className="carousel-container d-flex align-items-center gap-lg-6 gap-sm-4 gap-1 position-relative z-1">
      <button className="nav-button bg-transparent border-0 p-0" onClick={prevSlide}>
        <img width={22} src={ChevronLeftBlue} alt="prev btn" />
      </button>

      <div className="carousel d-flex justify-content-md-between justify-content-center flex-grow-1">
        {getVisibleSlides().map((slide, index) => (
          <div
            key={index}
            className={`slide d-flex align-items-center ${slide.isActive ? "active" : ""}`}
          >
            {slide.img}
          </div>
        ))}
      </div>

      <button className="nav-button bg-transparent border-0 p-0" onClick={nextSlide}>
        <img width={22} src={ChevronRightBlue} alt="next btn" />
      </button>
    </div>
  )
}

export default ImagesCarousel
