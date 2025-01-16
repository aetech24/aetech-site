import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App