import * as React from "react";
import Layout from "../components/layout";
import HeaderCurso from "../components/curso/header-curso";
import Asesorias from "../components/asesorias";
import BulletsCurso from "../components/curso/bullets-curso";

const cursoBullets = [
  "7 lecciones para dejar de malviajarte con el SAT",
  "Acceso ilimitado para siempre",
  "Online y a tu propio ritmo",
  "Material extra de apoyo",
  "Constancia de participación",
  "Bloopers de la grabación. (emoji con lengua)",
];

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <HeaderCurso />
        <BulletsCurso bullets={cursoBullets} />
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
