import * as React from "react";
import Layout from "../components/layout";
import BannerTaller from "../components/banner-taller";
import Asesorias from "../components/asesorias";

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
        <Asesorias />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
