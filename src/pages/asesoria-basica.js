import * as React from "react";
import Layout from "../components/layout";
import BannerBasica from "../components/banner-basica";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerBasica />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
