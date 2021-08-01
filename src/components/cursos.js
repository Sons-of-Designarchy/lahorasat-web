// import { Link } from "gatsby"
import React from "react";
import prev from "../images/cursos/curso-video-cover.png";
import BannerCursos from "./banner-cursos";

const Cursos = () => {
  const [openModal, setOpenModal] = React.useState('');

  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <h3 className="text-center text-primary">Nuestros cursos y talleres</h3>
          <p className="text-light text-center mb-5">Cursos en video y tallers en zoom para fkeofkeofeofeofefok</p>
          <div className="row no-gutters">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="course-card rounded" onClick={() => setOpenModal('video')}>
              <img src={prev} className="img-fluid" />
                <div className="p-3">
                  <div className="d-flex mb-2">
                    <div className="label label-primary mr-2">
                      CURSO EN VIDEO
                    </div>
                    <div className="label label-primary">$299 MXN</div>
                  </div>
                  <h4 className="mb-1 text-secondary">
                    Pasos básicos para sobrevivir al SATanas
                  </h4>
                  <p className="font-sm text-secondary-l mb-3">Aprende cómo incorporarte ante el SAT, primeros pasos para la vida fiscal y super tips para llevar tu contabilidad.</p>
                  <a className="btn btn-secondary btn-block">Ver detalles →</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              curso 2
            </div>
          </div>
        </div>
      </div>
      {openModal == 'video' && (
        <div className="section-modal">
          <div className="section-modal-backdrop" onClick={() => setOpenModal('')}></div>
          <div className="section-modal-content">
            <button onClick={() => setOpenModal('')} className="section-modal-close">
              X
            </button>
            <BannerCursos />
          </div>
        </div>
      )}
    </>
  );
};

export default Cursos;
