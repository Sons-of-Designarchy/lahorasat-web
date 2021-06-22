// import { Link } from "gatsby"
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
    <>    
      <div className="container">
        <div className="section-floating section-purple">
          <div className="row no-gutters">
            <div className="col-md-6">
              <p className="text-light uppercase mb-0">PRÓXIMO TALLER</p>
              {/* nombre de curso */}
              <h1 className="mb-2 text-primary">
                Pasos básicos para sobrevivir al SATanas
              </h1>
              <ul>
                <li>Martes 1 de junio 2021</li>
                <li>7:00 pm a 9:00 pm (aprox)</li>
                <li>A través de Zoom</li>
              </ul>
              <h3 className="mb-4">Costo: $350</h3>
              <a target="_blank" href="https://taller-basico-para-sobrevivir-al-sat.boletia.com/" className="btn btn-primary btn-lg mb-3 btn-floating">
                Reserva tu lugar
              </a>
            </div>
            <hr className="my-3 mb-5 d-md-none" />
            <div className="col-md-6">
              <div className="p-lg-2">
                <h4 className="text-light text-primary">¿Qué aprenderé aqui?</h4>
                <ul>
                  <li>
                    Todo lo que debes saber para incorporarte de forma correcta
                    (y que te convenga) ante el SAT{" "}
                  </li>
                  <li>
                    Primeros pasos que debes de tomar para comenzar la vida
                    fiscal, las obligaciones y derechos de ésta, y muchos tips
                    para hacerlo de la forma más sencilla
                  </li>
                </ul>
                <hr />
                <p class="text-light font-sm">
                  * Este curso está recomendado para personas que acaban de
                  salir de la carrera y no saben cómo darse de alta en el SAT,
                  personas que siempre han sido asalariadxs pero que quieren
                  aprender a sobrevivir ante el SATanas o quienes se acaban de
                  incorporar y no saben cuál es el siguiente paso.{" "}
                </p>
                <p class="text-light font-sm">
                  ¿Tienes un problema en específico? <a href="#asesoria" className="a-underline text-primary">Agenda una asesoria</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
