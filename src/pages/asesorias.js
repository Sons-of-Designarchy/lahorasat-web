import autoprefixer from "autoprefixer";
import * as React from "react";
import BannerCursos from "../components/banner-cursos";
import Checkout from "../components/checkout";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import Redes from "../images/redes.png";

// markup
const AsesoriasPage = () => {
  return (
    <>
      <div className="fondo-blanco">
        <div className="container">
          menu
          banner
          para que sirve
        </div>
      </div>
      <div className="fondo-gris" style={{ marginTop: "200px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="http://placekitten.com/400/500" />
              test
            </div>
            <div className="col-lg-6">
              <p></p>derecha izqfkefokeofekfok
            </div>
          </div>
        </div>
      </div>


      <Layout>
        <div className="section section-purple section-big">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="text-primary">Agenda una asesoria</h1>
                <p className="text-light font-lg">
                  Nuestras asesorias se realizan mediante una llamada de Zoom de
                  1 a 2 horas (según tu caso), donde te ayudaremos a resolver
                  tus dudas y guiarte paso a paso a organizar tu vida fiscal
                </p>
                <p className="bg-primary text-center text-dark p-3 mt-5 rounded">
                  *El servicio de la Hora Sat es informativo y educativo, por lo
                  que por el momento no damos asesorías sobre temas de{" "}
                  <strong>IMSS, Infonavit ni de Personas Morales</strong>, y no
                  podemos llevar tu contabilidad ¿tienes dudas de si te podemos
                  ayudar? Contactanos por whatsapp
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h1 className="text-center">Los pasos para tu asesoria 👇</h1>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="border">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="step">
                        <h1>1</h1>
                        <div className="step-content">
                          <h6>Elige tu plan</h6>
                          <p>
                            Selecciona ente asesoria informativa o personalizada
                            y ve si podemos ayudarte
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="step">
                        <h1>2</h1>
                        <div className="step-content">
                          <h6>Realiza tu pago</h6>
                          <p>
                            Puedes pagar con tarjeta de debito o crédito de
                            manera 100% segura, usamosla plataforma Stripe y no
                            guardamos tu información de pago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="step">
                        <h1>3</h1>
                        <div className="step-content">
                          <h6>Fecha y hora</h6>
                          <p>
                            En un calendario interactivo conectado a la
                            disponibilidad de nuestros asesores
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="step">
                        <h1>4</h1>
                        <div className="step-content">
                          <h6>¡Listo!</h6>
                          <p>
                            Te enviaremos toda la info de tu asesoria por correo
                            y recordatorios via sms antes del evento con la liga
                            de zoom
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a href="#" className="btn btn-primary btn-lg btn-circle">Agendar por Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AsesoriasPage;
