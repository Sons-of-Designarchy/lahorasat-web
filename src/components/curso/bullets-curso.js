// import { Link } from "gatsby"
import React from "react";

const BulletsCurso = ({ bullets }) => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          <h2 className="mb-5">¿Qué incluye?</h2>
          <div className="boxed-bullet-container row mb-5">
            {bullets.map((bullet) => (
              <div className="col-lg-6">
                <div className="boxed-bullet mb-3">{bullet}</div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <a
                className="btn btn-secondary mb-3 mr-3 btn-lg"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/curso-en-video"
                data-podia-embed="link"
              >
                Pagar en linea
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                className="btn btn-outline-secondary mb-3 btn-lg"
                style={{ width: "100%" }}
                target="_blank"
                href="https://wa.me/+525510722129"
              >
                Agendar por Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsCurso;