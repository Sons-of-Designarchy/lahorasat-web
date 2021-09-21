import * as React from "react";
import Layout from "../components/layout";
import BannerCursos from "../components/banner-cursos";
import Asesorias from "../components/asesorias";
import BannerTallerBasico from "../components/banner-taller-basico";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerTallerBasico />
          </div>
        </div>
        <Asesorias />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
