import React from 'react'
import { Navbar, Hero, Footer, About } from './components'
import './App.css'

function App() {
  return (
    <div className='app_container'>
      <Navbar />
      <div className='hero__section'>
        <Hero />
      </div>
      <div className='article__section'>
        <About />
      </div>
      <div className='footer__section'>
        <Footer />
      </div>
    </div>
  )
}

export default App