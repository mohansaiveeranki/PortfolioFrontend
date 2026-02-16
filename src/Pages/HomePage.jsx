import React from 'react'
import Home from '../Components/Home'
import ResponsiveCon from '../Components/ResponsiveCon'
import About from '../Components/About'
import Social from '../Components/Social'
import DarkMode from '../Components/DarkMode' 
import Skills from '../Components/Skills'
import Education from '../Components/Education'

const HomePage = () => {
  return (
    <div>
        <ResponsiveCon>
        <Home />
        <About />
        <Social />
       <DarkMode />
        <Skills />
        <Education />
      </ResponsiveCon>
    </div>
  )
}

export default HomePage