import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />
      default:
        return (
          <main>
            <h1>Golden Raffle</h1>
            <p>Welcome to Golden Raffle - Your chance to win amazing prizes!</p>
          </main>
        )
    }
  }

  return (
    <Router>
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={
          <div className="app">
            {renderPage()}
          </div>
        } />
        <Route path="/competitions" element={<div><h1>Competitions</h1><p>Browse our exciting competitions and prizes!</p></div>} />
        <Route path="/how-to-play" element={<div><h1>How to Play</h1><p>Learn how to participate in our raffles and competitions!</p></div>} />
        <Route path="/winners" element={<div><h1>Winners</h1><p>Check out our recent winners and their amazing prizes!</p></div>} />
        <Route path="/login" element={
          <div className="app">
            <Login />
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
