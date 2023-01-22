import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Links from './components/Links'

import axios from "axios"

import './App.css'

const App = () => {

const [page, setPage] = useState(0)
  
  return (
    <div className='container-fluid main'>
        <Nav setPage={setPage}/>
      {page === 0 ? <Home/> : null}  
      {page === 1 ? <About/>: null}
      {page === 2 ? <Projects/> : null}
      {page === 3 ? <Skills/> : null}
      {page === 4 ? <Links/> : null}
    </div>
  )
  
}

export default App

