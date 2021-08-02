// import { Link } from "gatsby"
import React from "react";
import prev from "../images/cursos/asesoria-practica-2.jpg";

const BannerAvanzada = () => {
  return (
    <div className="section-purple">
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="text-light uppercase mb-0 font-sm">80 MINS VIA ZOOM</p>
          <h1 className="mb-3 text-primary">
          Asesoría Practica para Personas Físicas
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
            <strong>En ella te damos apoyo práctico 1 a 1 para:</strong>
          </p>
          <ul className="mb-3">
            <li>Hacer tus facturas (CFDI) dentro del portal del SAT.</li>
            <li>Darte de alta y actualizar tu información. </li>
            <li>Presentar tu declaración mensual, bimestral o anual.</li>
            <li>Revisar tu devolución de ISR.</li>
            <li>Guía para seguir con tu negocio de la mejor manera ante el SAT. </li>
            <li>Ayuda con algún tema que tengas atrasado con el SAT.</li>
          </ul>
          <p className="text-light text-primary">
            <strong>Requisitos:</strong>
          </p>
          <ul className="mb-4">
            <li>RFC y contraseña para acceder al portal, o en su caso, e.firma y su clave vigente.</li>
          </ul>
          <p className="text-light text-primary">
            <strong>Dirigido a:</strong>
          </p>
          <ul className="mb-4">
            <li>Todxs lxs que están incorporadxs como Personas Físicas y quieren aprender a utilizar el portal. </li>
          </ul>
          <div className="mb-4">
            <h4>
              Costo: <span className="text-primary">$950</span>
            </h4>
            <p className="font-sm  text-light">
              (Pagas en linea y recibes acceso al calendario para agendar la fecha y hora que gustes)
            </p>
          </div>
          <div className="d-flex">
            <a
              className="btn btn-primary btn-lg mb-3 mr-3"
              style={{ width: "100%" }}
              href="https://lahorasat.podia.com/asesoria-practica"
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
    </div>
  );
};

export default BannerAvanzada;
