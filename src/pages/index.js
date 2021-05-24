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
              Todo lo que necesitas saber sobre <span>el SAT</span> y la{" "}
              <span>vida financiera</span> contado por{" "}
              <span>millennials para millennials</span> * 🤓💸
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
                  <li>Sábado 06 de Febrero de 2021</li>
                  <li>11:00 am a 13:30 pm (aprox)</li>
                  <li>A través de Zoom</li>
                </ul>
                {/* <h3 className="mb-4">Costo: $290</h3> */}
                <a href="#" className="btn btn-primary btn-lg mb-3 btn-floating">
                  Reserva tu lugar - arrow right here
                </a>
              </div>
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
                    ¿Tienes un problema en específico? <a href="#" className="a-underline text-primary">Agenda una asesoria - arrow right here</a>
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
            <div className="col col-lg-6">
              <h3>
                Somos una comunidad de educacion fiscal que busca{" "}
                <span>informar</span>, <span>concientizar</span> y{" "}
                <span>crear herramientas</span> para entender mejor al SAT
              </h3>
              <p className="font-lg">
                También damos <a href="#" className="a-underline">talleres online</a>,{" "}
                <a href="#" className="a-underline">asesorias</a> y{" "}
                <a href="#" className="a-underline">platicamos en medios </a>
              </p>
            </div>
            <div className="col col-lg-6">
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
      <div className="container">
        <div className="mt-5 section-floating section-green text-center">
          <p className="mb-2">
            ¿Tienes dudas en específico?
          </p>
          <h1 className="text-center">Agenda una asesoria</h1>
          <ul>
            <li>Responde nuestro quiz para saber más de tu problema</li>
            <li>Agenda y paga online de manera 100% segura</li>
            <li>A través de Zoom</li>
          </ul>
          <a href="#" className="mt-3 btn btn-lg btn-secondary">Cónoce más y agenda -- arrow here</a>
        </div>
      </div>

      <div className="section">
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
      </div>
    </Layout>
  );
};

export default IndexPage;
