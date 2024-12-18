import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quotes from './components/Quotes'
import Location from './pages/Location'
import ContentPage from './pages/ContentPage'
import Word from './components/Word'
import HomePage from './pages/HomePage'
import SlidingCards from './pages/SlidingCards'

function App() {

  return (
    <>
      <Navbar />
      <h1>hooi</h1>
      <HomePage />
      <h1>hii</h1>
      <Word />
      <ContentPage />
      <SlidingCards />
      <Quotes />
      <Location />
      <Footer />
    </>
  )
}

export default App
