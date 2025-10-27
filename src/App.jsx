import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import PreviousWinners from './pages/PreviousWinners/PreviousWinners'
import LiveCompetition from './pages/LiveCompetition/LiveCompetition'
import HowTOPlay from './pages/HowTOPlay/HowTOPlay'

import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/previous-winners" element={<PreviousWinners />} />
        <Route path="/live-competition" element={<LiveCompetition />} />
        <Route path="/how-to-play" element={<HowTOPlay />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
