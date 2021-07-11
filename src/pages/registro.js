import * as React from "react";
import Layout from "../components/layout";
import AuthLayout from "../components/auth/auth-layout";
import RegisterForm from "../components/register-form";

// markup
const SignupPage = () => {
  return (
    <>
    <Layout>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </Layout>
    </>
  );
};

export default SignupPage;
