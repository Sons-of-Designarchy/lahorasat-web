import * as React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import LoginForm from "../components/login-form";

// markup
const IndexPage = () => {
  return (
    <>
    <Layout>
      <Header />
      <LoginForm />
    </Layout>
    </>
  );
};

export default IndexPage;
