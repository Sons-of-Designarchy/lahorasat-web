import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./footer"
import "./layout.css"
// import Subscribe from "./subscribe"

export default function Layout({ children }) {
  return (
    <main>
      <Helmet>
        <title>La hora SAT® 🤓</title>
      </Helmet>
      {children}
      {/* <Subscribe /> */}
      <Footer />
    </main>
  )
}