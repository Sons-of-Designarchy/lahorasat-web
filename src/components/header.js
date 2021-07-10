// import { Link } from "gatsby"
import React, {useContext} from "react"
import logo from "../images/logo.svg"
import { AuthContext } from "../context/auth"
import firebase from "gatsby-plugin-firebase"
import { Link, navigate } from 'gatsby';

const Header = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    console.log('here');
    await firebase.auth().signOut();
    console.log('wuu');
    navigate("/")
  }

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
              {user ? (
                <>
                  {user.email}
                  <li className="nav-item mx-2">
                    <button onClick={handleLogout}>Logout</button> 
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item mx-2">
                    <a href="/register">register</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a href="/login">login</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
