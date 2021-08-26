import React from "react";
import logo from "../images/logo-footer.svg";
import Instagram from "../images/ig.svg";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/fb-logo.svg";
import Youtube from "../images/youtube-icon.svg";
import Linkedin from "../images/linkedin-icon.svg";

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
        Contáctanos: <br />
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
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.facebook.com/profile.php?id=100063771390136"
        >
          <img src={Facebook} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.youtube.com/channel/UC4oXv1xgGoPSxiFni7xVUWQ"
        >
          <img src={Youtube} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.linkedin.com/company/79887276"
        >
          <img src={Linkedin} />
        </a>
      </div>
      © 2021 La Hora Sat. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
