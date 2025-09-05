import { Link } from "../Link"

export default function AboutPage() {
  return (
    <>
      <h1>Sobre nosotros</h1>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G4QR4xZqGwaBxnM_o5emWa7Za3TyICf1CQ&s" alt="yo" />
        <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      </div>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}