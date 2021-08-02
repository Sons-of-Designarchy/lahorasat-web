// import { Link } from "gatsby"
import React from "react";
import BannerAvanzada from "./banner-avanzada";
import BannerBasica from "./banner-basica";
import basica from "../images/cursos/asesoria.png";
import practica from "../images/cursos/asesoria-practica.png";

const Asesorias = () => {
  const [openModal, setOpenModal] = React.useState("");

  return (
    <>
      <div className="section section-green">
        <div className="container">
          <h3 className="text-center text-secondary">
            ¿Necesitas asesoría personalizada? 
          </h3>
          <p className="text-secondary text-center mb-5">
            Tenemos dos modelos, si tienes dudas de cuál elegir, <a href="https://wa.me/+525510722129" className="text-secondary text-underline">mándanos un whats</a>.
          </p>
          <div className="row no-gutters">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mb-3">
              <div
                className="course-card rounded"
                onClick={() => setOpenModal("basica")}
              >
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      1 HORA
                    </div>
                    <div className="label label-primary mr-2">
                      VIA ZOOM
                    </div>
                    <div className="label label-primary">$650 MXN</div>
                  </div>
                  <h2 className="mb-1 text-secondary">
                    Asesoría básica
                  </h2>
                  <p className="text-secondary-l">
                    Una guía paso a pasito para entrarle al mundo del SAT sin morir en el intento. 
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block">Ver detalles →</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div
                className="course-card rounded"
                onClick={() => setOpenModal("practica")}
              >
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      80 MIN
                    </div>
                    <div className="label label-primary mr-2">
                      VIA ZOOM
                    </div>
                    <div className="label label-primary">$950 MXN</div>
                  </div>
                  <h2 className="mb-1 text-secondary">
                    Asesoría práctica <span className="font-sm">(para personas fisicas)</span>
                  </h2>
                  <p className="font-sm text-secondary-l">
                    Aprende cómo incorporarte ante el SAT, primeros pasos para
                    la vida fiscal y super tips para llevar tu contabilidad.
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block">Ver detalles →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          openModal == "basica" ? "section-modal open" : "section-modal"
        }
      >
        <div
          className="section-modal-backdrop"
          onClick={() => setOpenModal("")}
        ></div>
        <div className="section-modal-content">
          <button
            onClick={() => setOpenModal("")}
            className="section-modal-close"
          >
            X
          </button>
          <BannerBasica />
        </div>
      </div>
      <div
        className={
          openModal == "practica" ? "section-modal open" : "section-modal"
        }
      >
        <div
          className="section-modal-backdrop"
          onClick={() => setOpenModal("")}
        ></div>
        <div className="section-modal-content">
          <button
            onClick={() => setOpenModal("")}
            className="section-modal-close"
          >
            X
          </button>
          <BannerAvanzada />
        </div>
      </div>
    </>
  );
};

export default Asesorias;
