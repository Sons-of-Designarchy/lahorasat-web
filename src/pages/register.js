import React, { useState, useContext } from "react";
import firebase from "gatsby-plugin-firebase";
import { AuthContext } from "../context/auth";
import { navigate } from 'gatsby';
import RegisterForm from "../components/register-form";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const {setUser} = useContext(AuthContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        setUser(result);
        navigate("/login")
    } catch (err) {
      setData({...data, error: err.message })
    }
  };

  return (
    <>
      <h1>AQUI TE REGISTRAS</h1>
      <RegisterForm />
    </>
  );
};

export default Register
