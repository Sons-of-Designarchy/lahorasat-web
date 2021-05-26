import * as React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

import Redes from "../images/redes.png";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="hero">
        <Header />
        <div className="section container">
          <div className="col-lg-10 mx-auto">
            <h1 className="hero-title text-center">
              Todo lo que necesitas saber sobre <span className="bg-primary">el SAT</span> y la{" "}
              <span className="bg-primary">vida financiera</span> contado por{" "}
              <span className="bg-primary">millennials para millennials</span> * 🤓💸
            </h1>
          </div>
        </div>
        
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
      </div>
      <div className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Somos una comunidad de educación fiscal</h2>
              <p className="font-lg">
                Hacemos contenido informativo, impartimos <a target="_blank" href="https://taller-basico-para-sobrevivir-al-sat.boletia.com/" className="a-underline">cursos</a> y <a href="#asesoria" className="a-underline">asesorías personalizadas</a> que te ayudarán a entender cómo funciona el SAT.</p>
            </div>
            <div className="col-md-6">
              <a
                href="https://instagram.com/lahorasat"
                className="d-block"
                target="_blank"
              >
                <img src={Redes} className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="asesoria" className="container mb-5">
        <div className="mt-5 section-floating section-green text-center">
          <p className="mb-2">
            ¿Tienes dudas en específico?
          </p>
          <h1 className="text-center mb-3">Agenda una asesoria personalizada</h1>
          <div className="mb-3"><b>¿Cómo funciona?</b></div>
          <ul>
            <li>Cuéntanos el problema o duda que quieres resolver </li>
            <li>Te daremos el costo por la asesoría, duración y las fechas disponibles </li>
            <li>Te mandaremos los datos bancarios para que hagas el pago en max 24hrs  <br /><span className="font-sm">(nos tienes que mandar tu comprobante)</span></li>
            <li>¡Listo, tu asesoría quedará agendada! <br /><span className="font-sm"> (Te enviaremos un link para unirte a un Zoom en el día y hora de tu evento)</span></li>
          </ul>
          <div className="row justify-content-center">
            <div className="col-lg-auto">
              <a target="_blank" href="https://www.instagram.com/lahorasat/" className="mt-3 mr-1 btn btn-lg btn-secondary">Agenda vía Instagram</a>
            </div>
            <div className="col-lg-auto">
              <a href="mailto:lahorasat@gmail.com" className="mt-3 mr-1 btn btn-lg btn-outline-secondary">o contáctanos por correo</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section">
        <h3 className="text-center">Nuestros servicios:</h3>
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <img src="course-icon.png" />
              <h4>Cursos online</h4>
              <p>
                Nulla vitae elit libero, a pharetra augue. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Sed posuere consectetur
                est at lobortis. Donec ullamcorper nulla non metus auctor
                fringilla. Donec sed odio dui.
              </p>
              <a href="#" className="btn btn-primary">
                Ver próximos eventos
              </a>
            </div>
            <div className="col col-md-6">
              <img src="course-icon.png" />
              <h4>Asesorias</h4>
              <p>
                Nulla vitae elit libero, a pharetra augue. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Sed posuere consectetur
                est at lobortis. Donec ullamcorper nulla non metus auctor
                fringilla. Donec sed odio dui.
              </p>
              <a href="#" className="btn btn-primary" disabled>
                Muy pronto...
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default IndexPage;
