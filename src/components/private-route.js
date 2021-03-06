import React, { useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { user } = useContext(AuthContext);
  if (!user && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute