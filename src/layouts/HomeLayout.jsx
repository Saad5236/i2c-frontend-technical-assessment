import React from 'react'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function HomeLayout({children}) {
  return (
    <div className="bg-lightest-grey position-relative">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
