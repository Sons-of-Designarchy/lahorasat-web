import * as React from "react";
import Layout from "../components/layout";
import LoginForm from "../components/auth/login-form";
import AuthLayout from "../components/auth/auth-layout";

// markup
const LoginPage = () => {
  return (
    <>
    <Layout>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </Layout>
    </>
  );
};

export default LoginPage;
