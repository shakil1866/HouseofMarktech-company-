import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Service from './component/Service'
import Cta from './component/Cta'
import Contact from './component/Contact'
import Footer from './component/Footer'
import User from './component/User'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Cta/>
      <User/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
