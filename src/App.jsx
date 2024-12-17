import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quotes from './components/Quotes'
import Location from './pages/Location'
import ContentPage from './pages/ContentPage'
import Word from './components/Word'

function App() {

  return (
    <>
      <Navbar />
      {/* <h1>hooi</h1> */}
      {/* <h1>hii</h1> */}
      <ContentPage />
      <Word />
      <h1>how are you</h1>
      <Quotes />
      <h1>start</h1>
      <Location />
      <h1>end</h1>
      <Footer />
    </>
  )
}

export default App
