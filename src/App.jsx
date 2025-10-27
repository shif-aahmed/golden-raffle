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
            
            <footer className="footer">
              <div className="footer-main">
                <div className="footer-column">
                  <ul className="footer-links">
                    <li><a href="#home" onClick={() => handleNavigation('home')}>Home</a></li>
                    <li><a href="#competitions" onClick={() => handleNavigation('competitions')}>Competitions</a></li>
                    <li><a href="#how-to-play" onClick={() => handleNavigation('how-to-play')}>How to Play</a></li>
                    <li><a href="#winners" onClick={() => handleNavigation('winners')}>Winners</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h3>About</h3>
                  <ul className="footer-links">
                    <li><a href="#contact" onClick={() => handleNavigation('contact')}>Contact Us</a></li>
                    <li><a href="#faqs" onClick={() => handleNavigation('faqs')}>FAQs</a></li>
                    <li><a href="#login" onClick={() => handleNavigation('login')}>Login</a></li>
                  </ul>
                </div>
                
                <div className="footer-column">
                  <h3>Payment Method</h3>
                  <div className="payment-methods">
                    <div className="visa-logo">VISA</div>
                    <div className="mastercard-logo">Mastercard</div>
                  </div>
                  
                  <h3>Social</h3>
                  <div className="social-icons">
                    <div className="social-icon facebook">f</div>
                    <div className="social-icon twitter">t</div>
                    <div className="social-icon instagram">📷</div>
                  </div>
                </div>
                
                <div className="footer-column">
                  <h3>About</h3>
                  <div className="footer-text">
                    <p>Players must be over 18 years of age.</p>
                    <p>If you win and you are under 18 then you will not be able to collect the prize and the competition will be drawn again.</p>
                  </div>
                </div>
              </div>
              
              <div className="footer-bottom">
                <div className="footer-bottom-left">
                  <p>© Copyright 2021 | All Rights Reserved. Powered by HiltonWebDesign.com</p>
                </div>
                <div className="footer-bottom-right">
                  <a href="#terms">Website Terms & Conditions</a>
                  <a href="#competition-terms">Competition Terms & Conditions</a>
                  <a href="#privacy">Privacy Policy</a>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/competitions" element={<div><h1>Competitions</h1><p>Browse our exciting competitions and prizes!</p></div>} />
        <Route path="/how-to-play" element={<div><h1>How to Play</h1><p>Learn how to participate in our raffles and competitions!</p></div>} />
        <Route path="/winners" element={<div><h1>Winners</h1><p>Check out our recent winners and their amazing prizes!</p></div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
