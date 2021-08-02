import * as React from "react";
import Layout from "../components/layout";
import BannerCursos from "../components/banner-cursos";
import Asesorias from "../components/asesorias";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerCursos />
          </div>
        </div>
        <Asesorias />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
