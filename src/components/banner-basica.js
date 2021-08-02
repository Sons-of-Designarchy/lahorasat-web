// import { Link } from "gatsby"
import React from "react";
import prev from "../images/cursos/asesoria.png";

const BannerCursos = () => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="text-light uppercase mb-0 font-sm">1 HORA VIA ZOOM</p>
          <h1 className="mb-3 text-primary">
          Asesoría básica  
          </h1>
          <img src={prev} className="img-fluid mb-4 d-none d-md-block" style={{ borderRadius: 24, width: "80%" }} />
          <div className="d-none d-lg-block">
            <p className="text-light text-primary font-xs">
              <strong>Políticas de Cancelación.</strong>
            </p>
            <ul className="mb-3">
              <li className="font-xs">Puedes reagendar sin costo extra avisando mínimo 24 hrs antes de tu sesión.</li>
              <li className="font-xs">Puedes reagendar con 8 hrs de anticipación por un cargo de 35% del costo de la asesoría. </li>
              <li className="font-xs">Para solicitar reembolsos contáctanos en whatsapp. </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <p className="text-light text-primary">
            <strong>¿Qué aprenderás aqui?</strong>
          </p>
          <ul className="mb-3">
            <li>Conocer tu situación fiscal. </li>
            <li>Elegir el mejor régimen para ti.</li>
            <li>Entender lo básico para estar al día con el SAT.</li>
            <li>Emprender y sobrevivir al SAT de la mejor manera.</li>
            <li>Consultar documentos en el portal. </li>
            <li>Guiarte para tener una buena relación con el SAT. </li>
          </ul>
          <p className="text-light text-primary">
            <strong>Dirigido a:</strong>
          </p>
          <ul className="mb-4">
            <li>Lxs que quieren (o tienen) que darse de alta.</li>
            <li>Quienes necesitan conocer su situación fiscal. </li>
            <li>Recién incorporadxs al SAT que no entienden nada al respecto. </li>
            <li>Freelancers y emprendedorxs que necesitan asesoría. </li>
          </ul>
          <div className="mb-4">
            <h4>
              Costo: <span className="text-primary">$650</span>
            </h4>
            <p className="font-sm  text-light">
              (Pagas en linea y recibes acceso al calendario para agendar la fecha y hora que gustes)
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <a
              className="btn btn-primary btn-lg mb-3 mr-3"
              style={{ width: "100%" }}
              href="https://lahorasat.podia.com/asesoria-basica"
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
              Agendar por Whatsapp
            </a>
          </div>
          <div className="d-lg-none">
            <p className="text-light text-primary font-xs">
              <strong>Políticas de Cancelación.</strong>
            </p>
            <ul className="mb-3">
              <li className="font-xs">Puedes reagendar sin costo extra avisando mínimo 24 hrs antes de tu sesión.</li>
              <li className="font-xs">Puedes reagendar con 8 hrs de anticipación por un cargo de 35% del costo de la asesoría. </li>
              <li className="font-xs">Para solicitar reembolsos contáctanos en whatsapp. </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCursos;
