import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import SkewedUnderline from "../../assets/images/skewed-underline-orange.png"
import HeroImg from "../../assets/images/hero-main-img.png"
import HeroCardImg1 from "../../assets/images/hero-card-profile-img-1.png"
import LightBlueGradientBg from "../../assets/images/bg-light-blue-gradient.png"
function Home() {
    return (
        <div className="bg-lightest-grey">
            <Header />

            <main>
                <section>
                    <div className='home-hero container'>
                        <div>
                            <h1 className="mb-0 fw-bold">Lorem ipsum <span className="text-sky-blue position-relative">dolor<img className='position-absolute w-100 skewed-underline' src={SkewedUnderline} alt="skewed underline" />
                            </span> sit amet yo 👋</h1>

                            <div className='hero-profile-cards mt-4'>
                                <div className="hero-profile-card bg-white p-3 rounded-2 d-flex align-items-center gap-3">
                                    <img className='rounded-circle' src={HeroCardImg1} alt="" />

                                    <div className="flex-grow-1">
                                        <h6 className='fs-14 mb-1 text-black'>Andrew Shchultz</h6>
                                        <p className='fs-14 mb-0 text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img className='w-100' src={HeroImg} alt="main hero img" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home