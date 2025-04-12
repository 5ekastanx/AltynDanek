import React from 'react'
import Main from './pages/main/main.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
