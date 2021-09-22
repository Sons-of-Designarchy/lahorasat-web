// import { Link } from "gatsby"
import React from "react";
import review1 from "../images/reviews/1.png";
import review2 from "../images/reviews/2.png";
import review3 from "../images/reviews/3.png";
import review4 from "../images/reviews/4.png";
import review5 from "../images/reviews/5.png";
import review6 from "../images/reviews/6.png";
import review7 from "../images/reviews/7.png";
import review8 from "../images/reviews/8.png";
import review9 from "../images/reviews/9.png";
import review10 from "../images/reviews/10.png";
import review11 from "../images/reviews/11.png";
import review12 from "../images/reviews/12.png";
import review13 from "../images/reviews/13.png";
import review14 from "../images/reviews/14.png";
import review15 from "../images/reviews/14.png";
import review16 from "../images/reviews/15.png";
import review17 from "../images/reviews/16.png";
import review18 from "../images/reviews/17.png";
import review19 from "../images/reviews/18.png";
import review20 from "../images/reviews/19.png";
import review21 from "../images/reviews/20.png";
import review22 from "../images/reviews/21.png";
import review23 from "../images/reviews/22.png";
import review24 from "../images/reviews/23.png";
import review25 from "../images/reviews/24.png";
import review26 from "../images/reviews/25.png";
import review27 from "../images/reviews/26.png";
import review28 from "../images/reviews/27.png";
import review29 from "../images/reviews/28.png";
import review30 from "../images/reviews/29.png";
import review31 from "../images/reviews/30.png";
import review32 from "../images/reviews/31.png";
import review33 from "../images/reviews/32.png";
import review34 from "../images/reviews/33.png";
import review35 from "../images/reviews/34.png";
import review36 from "../images/reviews/35.png";
import Layout from "../components/layout";
import Cursos from "../components/cursos";
import Asesorias from "../components/asesorias";

const Testimonios = () => {
  return (
    <Layout>
      <div className="section section-purple">
        <div className="container text-center">
          <div className="mb-5">
            <h1 className="mb-1 text-primary">Testimonios</h1>
            <p className="text-light">Tu experiencia es muy importante para nosotras, por eso nos esforzamos para darte el mejor servicio.</p>
            <p className="text-light">Aquí algunos de los comentarios de nuestros clientes: </p>
          </div>
          <div className="masonry-container">
            <div className="masonry-item"><img src={review1} /></div>
            <div className="masonry-item"><img src={review2} /></div>
            <div className="masonry-item"><img src={review3} /></div>
            <div className="masonry-item"><img src={review4} /></div>
            <div className="masonry-item"><img src={review5} /></div>
            <div className="masonry-item"><img src={review6} /></div>
            <div className="masonry-item"><img src={review7} /></div>
            <div className="masonry-item"><img src={review8} /></div>
            <div className="masonry-item"><img src={review9} /></div>
            <div className="masonry-item"><img src={review10} /></div>
            <div className="masonry-item"><img src={review11} /></div>
            <div className="masonry-item"><img src={review12} /></div>
            <div className="masonry-item"><img src={review13} /></div>
            <div className="masonry-item"><img src={review14} /></div>
            <div className="masonry-item"><img src={review15} /></div>
            <div className="masonry-item"><img src={review16} /></div>
            <div className="masonry-item"><img src={review17} /></div>
            <div className="masonry-item"><img src={review18} /></div>
            <div className="masonry-item"><img src={review19} /></div>
            <div className="masonry-item"><img src={review20} /></div>
            <div className="masonry-item"><img src={review21} /></div>
            <div className="masonry-item"><img src={review22} /></div>
            <div className="masonry-item"><img src={review23} /></div>
            <div className="masonry-item"><img src={review24} /></div>
            <div className="masonry-item"><img src={review25} /></div>
            <div className="masonry-item"><img src={review26} /></div>
            <div className="masonry-item"><img src={review27} /></div>
            <div className="masonry-item"><img src={review28} /></div>
            <div className="masonry-item"><img src={review29} /></div>
            <div className="masonry-item"><img src={review30} /></div>
            <div className="masonry-item"><img src={review31} /></div>
            <div className="masonry-item"><img src={review32} /></div>
            <div className="masonry-item"><img src={review33} /></div>
            <div className="masonry-item"><img src={review34} /></div>
            <div className="masonry-item"><img src={review35} /></div>
            <div className="masonry-item"><img src={review36} /></div>
          </div>
        </div>
      </div>
      <Asesorias />
      <Cursos />
    </Layout>
  );
};

export default Testimonios;
