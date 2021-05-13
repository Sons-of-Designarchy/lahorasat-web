import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <main>
      <title>Home Page</title>
      {children}
      footer here
    </main>
  )
}