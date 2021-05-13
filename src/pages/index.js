import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="hero">
        <Header />
        <div className="section container">
          <div className="col-lg-10 mx-auto">
            <h1 className="hero-title text-center">
              Todo lo que necesitas saber sobre <span>el SAT</span> y la <span>vida
              financiera</span> contado por <span>millennials para millennials</span> * 🤓💸
            </h1>
          </div>
        </div>
        <div className="section section-purple">
          <p>Banner de proximo curso</p>
        </div>
        <div className="section">
          <div className="container">
            <div className="col col-lg-6">
              Sómos una comunidad de educacion fiscal y brindamos servicios como asesorias personalizadas, y cursos online que te ayudarán a mejorar tu situación fiscal
            </div>
            <div className="col col-lg-6">
              posts here
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
