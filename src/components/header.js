// import { Link } from "gatsby"
import React, { useContext } from "react";
import logo from "../images/logo-header.svg";
import { AuthContext } from "../context/auth";
import firebase from "gatsby-plugin-firebase";
import { Link, navigate } from "gatsby";

const headerStyles = {
  background: "#fff",
  borderBottom: "1px solid #ccc",
  position: "fixed",
  top: 0,
  width: "100%",
};

const Header = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigate("/");
  };

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scrollPosition > 0 ? "sticky" : null}
      style={headerStyles}
    >
      <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: 0 }}>
        <div className="container">
          <div>
            <a className="navbar-brand d-flex" href="/">
              <img alt="La Hora Sat" width="100" src={logo} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              showMenu ? "navbar-collapse" : "collapse navbar-collapse"
            }
          >
            <ul className="d-flex align-items-center navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#asesorias" className="nav-link">Asesorias</a>
              </li>
              {/* <li className="nav-item">
                <a href="#cursos">Cursos</a>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/nosotros/"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to="/contacto/"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {user ? (
                <>
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    to="app/profile/"
                  >
                  Mi cuenta
                </Link>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="nav-link">Salir</button>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item mx-2">
                    <a href="/register"></a>
                  </li> */}
                  <li className="nav-item mx-2">
                    <a href="/login" className="nav-link">Iniciar sesión</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
