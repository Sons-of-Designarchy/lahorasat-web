import React from "react";
import logo from "../images/logo-footer.svg";
import Instagram from "../images/ig.svg";
import Twitter from "../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="section section-purple text-center">
      <div className="mb-3">
        <img
          alt="La Hora Sat"
          width="100"
          src={logo}
          style={{ display: "inline-block" }}
        />
      </div>
      <div className="my-3">
        Contacto: <br />
        <a href="mailto:lahorasat@gmail.com" className="text-light">lahorasat@gmail.com</a>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.instagram.com/lahorasat/"
        >
          <img src={Instagram} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://twitter.com/lahorasat"
        >
          <img src={Twitter} />
        </a>
      </div>
      © 2021 La Hora Sat. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
