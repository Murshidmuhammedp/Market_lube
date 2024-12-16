import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quotes from './components/Quotes'
import Location from './pages/Location'

function App() {

  return (
    <>
      <Navbar />
      <Quotes />
      <h1>start</h1>
      <Location />
      <h1>end</h1>
      <Footer />
    </>
  )
}

export default App
