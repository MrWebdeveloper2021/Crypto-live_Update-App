import {BrowserRouter as Router  , Routes, Route } from 'react-router-dom'
import CoinDetials from './components/CoinDetials'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

// import React from 'react'

function App() {

  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
    
      <Routes>
        <Route path='/' element={<Home  setProgress={setProgress}/>} />
        <Route path='/coins' element={<Coins  setProgress={setProgress}/>} />
        <Route path='/exchanges' element={<Exchanges  setProgress={setProgress}/>} />
        <Route path='/coin/:id' element={<CoinDetials  setProgress={setProgress}/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
