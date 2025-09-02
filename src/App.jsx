import './App.css'

import HomePage from './assets/pages/Home.jsx'
import AboutPage from './assets/pages/About.jsx'

import { Router } from './Router.jsx'
import { Component } from 'react'


const appRoutes = [
  {
    path: '/',
    Component: HomePage 
  },
  {
    path: '/about',
    Component: AboutPage 
  },
  {
    path: '/twitch',
    Component: () => <h1>Twitch</h1>
  }
]



function App() {
  

  return (
    <main>
      <Router routes={appRoutes}  />
    </main>
  )
}

export default App
