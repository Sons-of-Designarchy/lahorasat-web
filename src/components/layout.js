import React from "react"
import Footer from "./footer"
import "./layout.css"
import Subscribe from "./subscribe"

export default function Layout({ children }) {
  return (
    <main>
      <title>Home Page</title>
      {children}
      <Subscribe />
      <Footer />
    </main>
  )
}