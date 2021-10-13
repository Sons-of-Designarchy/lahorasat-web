// import { Link } from "gatsby"
import React from "react";
import curso from "../images/cursos/curso-video-cover.jpg";
import taller from "../images/cursos/taller-hacks-cover.jpg";
import BannerCursos from "./banner-cursos";
import BannerTaller from "./banner-taller";
import BannerTallerBasico from "./banner-taller-basico";

const Cursos = () => {
  const [openModal, setOpenModal] = React.useState("");

  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <h3 className="text-center text-primary">
            Nuestros cursos y talleres
          </h3>
          <p className="text-light text-center mb-5">
          Aquí están las respuestas del universo. Si tienes dudas de qué curso elegir, <a href="https://wa.me/+525510722129" className="text-primary">mándanos un Whatsapp </a> 
😉
          </p>
          <div className="row no-gutters">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mb-3">
              <a
                className="course-card rounded"
                href="/curso-en-video"
              >
                <img src={curso} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      CURSO EN VIDEO
                    </div>
                    <div className="label label-primary">$299 MXN</div>
                  </div>
                  <h4 className="mb-1 text-secondary">
                    Pasos básicos para sobrevivir al SATanas
                  </h4>
                  <p className="font-sm text-secondary-l">
                    Aprende cómo incorporarte ante el SAT, primeros pasos para
                    la vida fiscal y super tips para llevar tu contabilidad.
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block">Ver detalles →</a>
                </div>
              </a>
            </div>
            <div className="col-lg-5 mb-3">
              <div
                className="course-card rounded"
                onClick={() => setOpenModal("taller-basico")}
              >
                <img src={taller} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      TALLER EN ZOOM
                    </div>
                    <div className="label label-primary mr-2">$350 MXN</div>
                    <div className="label label-primary">PRÓXIMAMENTE</div>
                  </div>
                  <h4 className="mb-1 text-secondary">
                    Taller online sobre el SAT
                  </h4>
                  <p className="font-sm text-secondary-l">
                  A diferencia de nuestro curso en video, este curso es en vivo, por lo que aquí podrás resolver esas dudas sobre el SAT que no te dejan dormir tranquilx. 
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block disabled">Próximamente</a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-5 mb-3">
              <div
                className="course-card rounded"
                // onClick={() => setOpenModal("taller")}
              >
                <img src={taller} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      TALLER ONLINE
                    </div>
                    <div className="label label-primary mr-2">
                      PRÓXIMAMENTE
                    </div>
                    <div className="label label-primary">$790 MXN</div>
                  </div>
                  <h4 className="mb-1 text-secondary">
                  Hacks del SAT para Freelancers
                  </h4>
                  <p className="font-sm text-secondary-l">
                    Aprenderás a navegar en el portal, emitir facturas y hacer tus declaraciones. 
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block disabled">Proximamente...</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className={
          openModal == "video" ? "section-modal open" : "section-modal"
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
          <div className="section-purple">
            <BannerCursos />
          </div>
        </div>
      </div>
      <div
        className={
          openModal == "taller" ? "section-modal open" : "section-modal"
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
          <div className="section-purple">
            <BannerTaller />
          </div>
        </div>
      </div>
      <div
        className={
          openModal == "taller-basico" ? "section-modal open" : "section-modal"
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
          <div className="section-purple">
            <BannerTallerBasico />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
