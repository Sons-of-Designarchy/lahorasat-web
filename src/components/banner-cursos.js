// import { Link } from "gatsby"
import React from "react";
import prev from "../images/curso-video.png";

const BannerCursos = () => {
  return (
    <div className="section-purple">
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="text-light uppercase mb-0 font-sm">CURSO EN VIDEO</p>
          <h1 className="mb-3 text-primary">
            Pasos básicos para sobrevivir al SATanas
          </h1>
          <img src={prev} className="img-fluid mb-4 d-none d-md-block" style={{ borderRadius: 24, width: "80%" }} />
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
              Eres asalariadx pero quieres aprender a sobrevivir ante el SATanas
            </li>
            <li class="font-sm mb-1">
              Te acabas de incorporar y no sabes cual es el siguiente paso
            </li>
          </ul>
          <div className="mb-4">
            <h4>
              Costo: <span className="text-primary">$299</span>
            </h4>
            <p className="font-xs text-light">
              (Pagas en linea y recibes acceso inmediato al video)
            </p>
          </div>
          <div className="d-flex">
            <a
              className="btn btn-primary btn-lg mb-3 mr-3"
              style={{ width: "100%" }}
              href="https://lahorasat.podia.com/curso-en-video"
              data-podia-embed="link"
            >
              Pagar en linea
            </a>
            <a
              className="btn btn-outline-primary btn-lg mb-3"
              style={{ width: "100%" }}
              target="_blank"
              href="https://wa.me/+525510722129"
            >
              Agendar por whats
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCursos;
