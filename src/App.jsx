import './App.css'

import HomePage from './assets/pages/Home.jsx'
import AboutPage from './assets/pages/About.jsx'

import { Router } from './Router.jsx'
import SearchPage from './assets/pages/Search.jsx'


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
    path: '/search/:query',
    Component: SearchPage
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
