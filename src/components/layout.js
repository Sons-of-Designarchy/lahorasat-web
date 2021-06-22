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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X23C028SNG"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X23C028SNG');
        </script>
      </Helmet>
      {children}
      {/* <Subscribe /> */}
      <Footer />
    </main>
  )
}