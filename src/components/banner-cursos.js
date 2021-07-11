// import { Link } from "gatsby"
import React from "react";
import prev from "../images/curso-prev.png";

const BannerCursos = () => {
  return (
    <>
      <div className="container">
        <div className="section-floating section-purple">
          <div className="row no-gutters">
            <div className="col-md-6">
              <p className="text-light uppercase mb-0 font-sm">
                CURSO EN VIDEO - 130 MIN
              </p>
              <h1 className="mb-3 text-primary">
                Pasos básicos para sobrevivir al SATanas
              </h1>
              <img src={prev} className="img-fluid mb-4" />
            </div>
            <div className="col-md-6">
              <p className="text-light text-primary">
                <strong>¿Qué aprenderás aqui?</strong>
              </p>
              <ul className="mb-3">
                <li className="text-light font-sm mb-1">
                  Cómo incorporarte de forma correcta <i>(y que te convenga)</i>{" "}
                  ante el SAT{" "}
                </li>
                <li className="text-light font-sm mb-1">
                  Primeros pasos para la vida fiscal, cómo tus obligaciones y
                  derechos
                </li>
                <li className="text-light font-sm mb-1">
                  Super tips para llevar tu contabilidad de manera sencilla
                </li>
              </ul>
              <p className="text-light text-primary">
                <strong>Este curso es para ti si...</strong>
              </p>
              <ul className="mb-4">
                <li class="font-sm mb-1">
                  Acabas de salir de la carrera y no sabes como darte de alta
                </li>
                <li class="font-sm mb-1">
                  Eres asalariadx pero quieres aprender a sobrevivir ante el
                  SATanas
                </li>
                <li class="font-sm mb-1">
                  Te acabas de incorporar y no sabes cuál es el siguiente paso
                </li>
              </ul>
              <div className="mb-4">
                <h4>
                  Costo: <span className="text-primary">$199</span>
                </h4>
                <p className="font-xs text-light">
                  (Pagas en linea y recibes acceso inmediato al video)
                </p>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <a
                    target="_blank"
                    href="https://lahorasat.podia.com/curso-en-video"
                    className="btn btn-primary btn-lg mb-3 btn-floating btn-block"
                    style={{ width: "100%" }}
                  >
                    Comprar curso
                  </a>
                </div>
                <div className="col-md-6">
                  <p class="text-light font-sm">
                    ¿Tienes un problema o duda en específico?{" "}
                    <a href="#asesorias" className="a-underline text-primary">
                      Agenda una asesoria :)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCursos;
