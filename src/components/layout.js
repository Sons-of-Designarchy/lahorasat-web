import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <main>
      <Helmet>
        <script src="https://cdn.podia.com/embeds.js" async="async"></script>
        <title>La hora SAT® 🤓</title>
        <meta name="description" content="Somos una comunidad de educación fiscal. Hacemos contenido informativo, impartimos cursos y asesorías personalizadas que te ayudarán a entender cómo funciona el SAT." />
        <meta name="keywords" content="sat, cursos, asesorias, educación fiscal, impuestos" />
      </Helmet>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </main>
  );
}
