import * as React from "react";
import Layout from "../components/layout";
import BannerAvanzada from "../components/banner-avanzada";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerAvanzada />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
