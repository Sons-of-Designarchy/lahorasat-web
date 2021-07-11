import React from "react"

export default function AuthLayout({ children }) {
  return (
    <div className="container">
      <div className="col-md-8 mx-auto mt-lg-5">
        {children}
      </div>
    </div>
  )
}