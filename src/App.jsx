import { useEffect, useState } from 'react'

import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Social from './Components/Social'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Footer from './Components/Footer'
import Navbar1 from './Components/Navbar1'
import { Navbar } from 'react-bootstrap'

function App() {
  
  
  return(
     <>
     <Navbar1/>
     <Home /> 
     <About /> 
     <Social />
     <Skills />
     <Education/> 
     <Footer/>
     </>
  )
}

// console.log(App())

export default App
