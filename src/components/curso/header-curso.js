// import { Link } from "gatsby"
import React from "react";
import coverPhoto from "../../images/cursos/curso-en-video/cover-photo.png";
import playIcon from "../../images/cursos/play-icon.svg";

const HeaderCurso = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="section section-purple">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-lg-r">
            <h2 className="mb-3 text-primary">
              Curso básico en video para sobrevivir al SAT...anas 👹
            </h2>
            <button onClick={() => setOpenModal(!openModal)}>
              <img
                src={coverPhoto}
                className="img-fluid mb-4 d-lg-none"
                style={{ borderRadius: 24, width: "100%" }}
              />
            </button>
            <p className="text-light">
              En este curso online <span className="text-primary">*</span>{" "}
              aprenderás lo más básico que necesitas saber para darte de alta y
              comenzar con tu vida fiscal
            </p>
            <div className="mt-2 mb-4">
              <p className="font-xs text-light">
                <span className="text-primary">
                  * Pago 100% seguro, recibes acceso inmediato a los videos en
                  alta calidad para siempre
                </span>
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row">
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
                Agendar por Whatsapp
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="video-link-icon"
            >
              <img
                src={coverPhoto}
                className="img-fluid mb-4"
                style={{ borderRadius: 24, width: "100%" }}
              />
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={openModal ? "section-modal open" : "section-modal"}>
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
            <iframe
              width="100%"
              className="section-modal-video"
              src="https://www.youtube.com/embed/BxjK_NGBq0o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCurso;
