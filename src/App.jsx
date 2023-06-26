import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ContactPage, ProductPage, Terms, Privacy } from './components'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App