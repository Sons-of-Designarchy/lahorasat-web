import * as React from "react";
import Layout from "../components/layout";
import Asesorias from "../components/asesorias";
import BulletsCurso from "../components/curso/bullets-curso";
import HeaderCurso from "../components/curso/header-curso";

const cursoBullets = [
  "7 lecciones para dejar de malviajarte con el SAT",
  "Acceso ilimitado para siempre",
  "Online y a tu propio ritmo",
  "Material extra de apoyo",
  "Constancia de participación",
  "Bloopers de la grabación 😝",
];

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <HeaderCurso />
        <BulletsCurso bullets={cursoBullets} />
        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-5">
                <h3 className="mb-4">¿Qué aprenderás aquí?</h3>
                <ul>
                  <li className="boxed-bullet light">Cómo incorporarte de forma correcta</li>
                  <li className="boxed-bullet light">Primeros pasos para la vida fiscal</li>
                  <li className="boxed-bullet light">Tus obligaciones y derechos ante el SAT</li>
                  <li className="boxed-bullet light">Tips para llevar tu contabilidad de manera sencilla</li>
                  <li className="boxed-bullet light">Paz mental de saber cómo lidiar con el SAT. 🤓</li>
                </ul>
                <p className="mt-3 font-sm">
                  ¿Tienes dudas?{" "}
                  <a
                    target="_blank"
                    href="https://wa.me/+525510722129"
                    className="text-underline"
                  >
                    Contáctanos por Whats
                  </a>
                </p>
              </div>
              <div className="col-lg-6">
                <div className="boxed-bullet p-4">
                  <h4>Curso básico en video para sobrevivir al SAT...anas 👹</h4>
                  <div className="d-flex py-3">
                    <p className="label label-primary mr-2">$299 pesos</p>
                    <p className="label label-primary">Online</p>
                  </div>
                  <p className="font-xs text-secondary mb-3">* Pago 100% seguro, recibes acceso inmediato a los videos en alta calidad para siempre</p>
                  <a
                    className="btn btn-secondary mb-3 mr-3 btn-lg"
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
            </div>
          </div>
        </div>
        <ul className="mb-3">
          <li className="text-light font-sm mb-1">
            Cómo incorporarte de forma correcta <i>(y que te convenga)</i> ante
            el SAT{" "}
          </li>
          <li className="text-light font-sm mb-1">
            Primeros pasos para la vida fiscal, cómo tus obligaciones y derechos
          </li>
          <li className="text-light font-sm mb-1">
            Super tips para llevar tu contabilidad de manera sencilla
          </li>
        </ul>
        <p className="text-light text-primary">
          <strong>Este curso es para ti si...</strong>
        </p>
        <ul className="mb-4">
          <li class="font-sm mb-1">
            Acabas de salir de la carrera y no sabes como darte de alta
          </li>
          <li class="font-sm mb-1">
            Eres asalariadx pero quieres aprender a sobrevivir ante el SATanas
          </li>
          <li class="font-sm mb-1">
            Te acabas de incorporar y no sabes cual es el siguiente paso
          </li>
        </ul>
        <Asesorias />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
