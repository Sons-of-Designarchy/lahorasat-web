import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg"

const Footer = () => {

  return (
    <footer className="text-center">
      <nav className="navbar navbar-expand-lg navbar-dark mt-3">
        <div className="container">
          <div>
            <ul className="d-flex align-items-center justify-content-center navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" activeClassName="active" to="/">Asesorias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/cursos/">Cursos Online</Link>
              </li>
              <li className="nav-item d-none d-lg-block mx-5">
                <a href="/"><img alt="La Hora Sat" width="100" src={logo} /></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/nosotros/">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/contacto/">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      © 2021 La Hora Sat. Todos los derechos reservados.
    </footer>
  )
}

export default Footer
