import * as React from "react";
import Layout from "../components/layout";
import Cursos from "../components/cursos";
import BannerCursos from "../components/banner-cursos";
import BannerTaller from "../components/banner-taller";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerTaller showImage />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
