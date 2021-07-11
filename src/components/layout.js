import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import Subscribe from "./subscribe"
// import Subscribe from "./subscribe"

export default function Layout({ children }) {
  return (
    <main>
      <Helmet>
        <title>La hora SAT® 🤓</title>
      </Helmet>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Subscribe />
      <Footer />
    </main>
  )
}