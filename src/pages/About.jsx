import { Link } from "../Link"
console.log('About Page')

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a Home',  
    description: 'Esta es una pagina de ejemplo para crear un React Router desde cero',
  },
  en: {
    title: 'About us',  
    button: 'Go to Home',
    description: 'This is a sample page to create a React Router from scratch',
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G4QR4xZqGwaBxnM_o5emWa7Za3TyICf1CQ&s" alt="yo" />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}