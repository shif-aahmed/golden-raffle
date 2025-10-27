import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<div><h1>Competitions</h1><p>Browse our exciting competitions and prizes!</p></div>} />
        <Route path="/how-to-play" element={<div><h1>How to Play</h1><p>Learn how to participate in our raffles and competitions!</p></div>} />
        <Route path="/winners" element={<div><h1>Winners</h1><p>Check out our recent winners and their amazing prizes!</p></div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
