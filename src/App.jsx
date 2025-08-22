import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home Page</h1> 
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <a href="/about">Ir a Sobre nosotros</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>Sobre nosotros</h1>
      <div>
        <img src="https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/352564906_5723767637724741_4247828587408743444_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFFeEHX48GpoUKhtUA3QFztxxi7PXyl6MvHGLs9fKXoy_E3zE8_Rvxpf1VQMCLWsbxRMsO5y4XyWm1GFjbIx7DM&_nc_ohc=1cxr4FIvByQQ7kNvwEDCdoN&_nc_oc=AdkraT4-R2-rmvlyGo_f20EdfkcBcrW6FXsiGOJiAp7U5HDdLl8R8YuwfRcphRLDmqs&_nc_zt=23&_nc_ht=scontent.fmex10-4.fna&_nc_gid=d-ms1325Hsfv0DGf8xx2Bg&oh=00_AfVDC3ZZhdi4QOTSiPwY-O6rK8ST_aem5h5Qrwv9wt_aGQ&oe=68AD8C92" alt="yo" />
        <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      </div>
      <a href="/">Ir a Inicio</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath ]= useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage /> }
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
