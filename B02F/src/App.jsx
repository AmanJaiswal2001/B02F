import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import GradientBackground from './components/GradientBackground'
import Services from './components/Services'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Hero/>
<GradientBackground/>
<Services/>
<Footer/>
</>
  )
}

export default App
