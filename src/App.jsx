import './App.css'
import { lazy } from 'react'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'


import SearchPage from './pages/Search.jsx'
import { Suspense } from 'react'
import { Component } from 'react'

const lazyHomePage = lazy(() => import('./pages/Home.jsx'))
const lazyAboutPage = lazy(() => import('./pages/About.jsx'))
const lazyPage404 = lazy(() => import('./pages/404.jsx'))


const appRoutes = [
  {
    path: '/:lang/About',
    Component: lazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]



function App() {
  

  return (
    <main>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Router routes={appRoutes} defaultComponent={lazyPage404}>
          <Route path='/' Component={lazyHomePage} />
          <Route path='/about' Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
