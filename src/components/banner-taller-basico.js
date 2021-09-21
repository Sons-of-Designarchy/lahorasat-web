// import { Link } from "gatsby"
import React from "react";
import prev from "../images/cursos/curso-video-cover.jpg";

const BannerTallerBasico = () => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="text-light uppercase mb-0 font-sm">TALLER EN ZOOM - 2 OCT - 11AM A 12:30PM</p>
          <h1 className="mb-3 text-primary">Taller online sobre el SAT</h1>
          <img
            src={prev}
            className="img-fluid mb-4 d-none d-md-block"
            style={{ borderRadius: 24, width: "80%" }}
          />
          <p className="text-light">
            A diferencia de nuestro curso en video, este curso es en vivo, por
            lo que aquí podrás resolver esas dudas sobre el SAT que no te dejan
            dormir tranquilx.
          </p>
        </div>
        <div className="col-md-6">
          <p className="text-light text-primary">
            <strong>Aquí aprenderás:</strong>
          </p>
          <ul className="mb-3">
            <li className="text-light font-sm mb-1">
              Cómo incorporarte de forma correcta (y que te convenga) ante el
              SAT.
            </li>
            <li className="text-light font-sm mb-1">
              Primeros pasos para la vida fiscal, cómo tus obligaciones y
              derechos.
            </li>
            <li className="text-light font-sm mb-1">
              Super tips para llevar tu contabilidad de manera sencilla.
            </li>
          </ul>
          <p className="text-light text-primary">
            <strong>Este curso es para ti si...</strong>
          </p>
          <ul className="mb-3">
            <li class="font-sm mb-1">
              Acabas de salir de la carrera y no sabes como darte de alta.
            </li>
            <li class="font-sm mb-1">
              Eres asalariadx pero quieres aprender a sobrevivir ante el
              SATanas.
            </li>
            <li class="font-sm mb-1">
              Te acabas de incorporar y no sabes cual es el siguiente paso.
            </li>
          </ul>
          <p className="text-light text-primary">
            <strong>Qué incluye: </strong>
          </p>
          <ul className="mb-4">
            <li class="font-sm mb-1">Acceso al taller.</li>
            <li class="font-sm mb-1">Material extra de apoyo.</li>
            <li class="font-sm mb-1">Certificado de participación.</li>
            <li class="font-sm mb-1">Una preocupación menos en tu vida.</li>
          </ul>
          <div className="mb-4">
            <h4>
              Costo: <span className="text-primary">$350</span>
            </h4>
            <p className="font-xs text-light">
              (Pagas en línea y recibes un correo con la liga de acceso)
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <a
              className="btn btn-primary btn-lg mb-3 mr-3"
              style={{ width: "100%" }}
              href="https://lahorasat.podia.com/taller-online-para-sobrevivir-al-sat"
              data-podia-embed="link"
            >
              Inscribirme en linea
            </a>
            <a
              className="btn btn-outline-primary btn-lg mb-3"
              style={{ width: "100%" }}
              target="_blank"
              href="https://wa.me/+525510722129"
            >
              Inscribirme por Whatsapp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTallerBasico;
