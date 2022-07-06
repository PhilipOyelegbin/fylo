import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import curve_1 from './images/bg-curve-mobile.svg'
import curve_2 from './images/bg-curve-desktop.svg'
import Team from './components/Team.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'
import Pagecontainer from './components/Pagecontainer.jsx'

const App = () => {
  return (
    <>
      <Nav/>
      <Pagecontainer>
        <Hero/>
        <img className='md:hidden' src={curve_1} alt="curve" />
        <img className='hidden md:block' src={curve_2} alt="curve" />
        <Team/>
        <Subscribe/>
      </Pagecontainer>
      <Footer/>
    </>
  )
}

export default App