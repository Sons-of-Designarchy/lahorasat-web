import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import Profile from "../../components/app/profile"
import Login from "../../components/auth/login-form"
import PrivateRoute from "../../components/private-route"
import Header from "../../components/header"

const App = () => (
  <Layout>
    <Header />
    <Router>
      {/* <Profile path="/app/profile" /> */}
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App