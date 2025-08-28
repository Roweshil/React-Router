import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { EVENTS } from './assets/const.js'

import HomePage from './assets/pages/Home.jsx'
import AboutPage from './assets/pages/About.jsx'


const Routes = [
  {
    
  }
]

function App() {
  const [currentPath, setCurrentPath ]= useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    } 
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage /> }
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
