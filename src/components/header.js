import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.svg"

const Header = () => {

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

  React.useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <header className={scrollPosition > 0 ? 'sticky' : null}>
      <nav className="navbar navbar-expand-lg navbar-light mt-3">
        <div className="container">
          <div className="d-lg-none" style={{ width: '100%', textAlign: 'center' }}>
            <a className="navbar-brand d-lg-none" href="/"><img alt="La Hora Sat" width="100" src={logo} /></a>
          </div>
          {/* <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className={showMenu ? "navbar-collapse justify-content-center" : "collapse navbar-collapse justify-content-center" }>
            <ul className="d-flex align-items-center navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link active" activeClassName="active" to="/">Asesorias</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/cursos/">Cursos Online</Link>
              </li> */}
              <li className="nav-item mx-5">
                <a href="/"><img alt="La Hora Sat" width="100" src={logo} /></a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/nosotros/">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/contacto/">Contacto</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
