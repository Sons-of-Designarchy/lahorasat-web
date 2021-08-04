// import { Link } from "gatsby"
import React from "react";
import prev from "../images/cursos/taller-hacks-cover.jpg";

const BannerTaller = ({showImage}) => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-6">
          <p className="text-light uppercase mb-0 font-sm">TALLER EN ZOOM - 7 de agosto - 10am</p>
          <h2 className="mb-2 text-primary">
            Hacks del SAT para Freelancers
          </h2>
          {showImage && (
            <img src={prev} className="img-fluid mb-4" style={{ borderRadius: 24, width: "80%" }} />
          )}
          <p className="text-light text-primary">
            <strong>Temario</strong>
          </p>
          <ul className="mb-3">
            <li className="text-light font-sm mb-1">Cómo revisar tu Buzón Tributario.</li>
            <li className="text-light font-sm mb-1">Dónde encontrar tus documentos más importantes dentro del portal.</li>
            <li className="text-light font-sm mb-1">Cómo realizar una factura (CFDI).</li>
            <li className="text-light font-sm mb-1">¿Qué puedo deducir como freelancer?</li>
            <li className="text-light font-sm mb-1">¿Estoy declarando de manera correcta?</li>
            <li className="text-light font-sm mb-1">¿Qué se llena en una declaración y qué impuestos se presentan?</li>
            <li className="text-light font-sm mb-1">Sección de preguntas y consultas personales </li>
          </ul>
          <div className="bg-primary text-secondary p-3 font-xs mr-5 mb-4">
            <ul>
              <li>El taller se impartirá por Zoom y tendrá una duración de 2hrs</li>
              <li>La liga se te enviará una vez hecha tu compra</li>
              <li>
                Incluye certificado, material de apoyo, y la liga de la grabación por si no pudiste asistir.
              </li>
            </ul>
          </div>

        </div>
        <div className="col-md-6">
          <p className="text-light text-primary">
            <strong>Destinado a freelancers y emprendedores (Personas Físicas)...</strong>
          </p>
          <ul className="mb-4">
            <li className="font-sm mb-1">Que llevan su propia contabilidad o quieren aprender a hacerlo.</li>
            <li className="font-sm mb-1">Apenas se incorporaron al SAT.</li>
            <li className="font-sm mb-1">Ya tienen contador/a pero quieren aprender a usar el portal.</li>
          </ul>
          <p className="text-light text-primary">
            <strong>Requisitos *</strong>
          </p>
          <ul className="mb-2">

          <li className="font-sm mb-1">Tener conocimientos básicos sobre el SAT (si no los tienes, puedes tomar nuestro curso grabado <a href="#">aquí</a></li>
          <li className="font-sm mb-1">Laptop</li>
          <li className="font-sm mb-1">E.firma y contraseña para acceder al SAT y/o tu RFC y contraseña.</li>
          </ul>
          <p className="text-primary mb-4 font-xs">*Si no cuentas con los requisitos podrás estar como espectador interactuando y tomando notas.</p>
          <div className="mb-4">
            <h4>
              Costo: <span className="text-primary">$790</span>
            </h4>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <a
              className="btn btn-primary btn-lg mb-3 mr-3"
              style={{ width: "100%" }}
              href="https://lahorasat.podia.com/hacks-del-sat-para-freelancers"
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
        </div>
      </div>
    </>
  );
};

export default BannerTaller;
