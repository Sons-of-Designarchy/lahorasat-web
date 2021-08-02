import * as React from "react";
import Cursos from "../components/cursos";
import Layout from "../components/layout";
import Redes from "../images/redes.png";
import Subscribe from "../components/subscribe";
import Asesorias from "../components/asesorias";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout homepage>
      <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="mb-4">Somos una comunidad de educación fiscal</h1>
                <p className="font-lg">
                  Hacemos contenido informativo, impartimos{" "}
                  <a
                    target="_blank"
                    href="https://taller-basico-para-sobrevivir-al-sat.boletia.com/"
                    className="a-underline"
                  >
                    cursos
                  </a>{" "}
                  y{" "}
                  <a href="#asesoria" className="a-underline">
                    asesorías personalizadas
                  </a>{" "}
                  que te ayudarán a entender cómo funciona el SAT.
                </p>
              </div>
              <div className="col-md-6">
                <a
                  href="https://instagram.com/lahorasat"
                  className="d-block"
                  target="_blank"
                >
                  <img src={Redes} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="cursos">
          <Cursos />
        </div>
        <div id="asesorias">
          <Asesorias />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
