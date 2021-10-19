import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";
import Subscribe from "./subscribe";

export default function Layout({ children, homepage, title }) {
  return (
    <main>
      <Helmet>
        <script src="https://cdn.podia.com/embeds.js" async="async"></script>
        <title>{title ? `La hora SAT® 🤓  | ${title}` : "La hora SAT® 🤓 "}</title>
        <meta name="description" content="Somos una comunidad de educación fiscal. Hacemos contenido informativo, impartimos cursos y asesorías personalizadas que te ayudarán a entender cómo funciona el SAT." />
        <meta name="keywords" content="sat, cursos, asesorias, educación fiscal, impuestos" />
      </Helmet>
      <Header homepage={homepage} />
      <div className="page-content">{children}</div>
      <div className="hero">
        <div className="section section-gray container">
          <div className="col-lg-10 mx-auto">
            <h1 className="hero-title text-center">
              Todo lo que necesitas saber sobre{" "}
              <span className="bg-primary">el SAT</span> y la{" "}
              <span className="bg-primary">vida financiera</span> contado por{" "}
              <span className="bg-primary">millennials para millennials</span>{" "}
              * 🤓💸
            </h1>
            <Subscribe />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
