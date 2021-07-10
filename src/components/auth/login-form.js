import React, { useState, useContext } from "react";
import firebase from "gatsby-plugin-firebase";
import { AuthContext } from "../../context/auth";
import { navigate } from 'gatsby';

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        setUser(result);
        navigate("/")
    } catch (err) {
      setData({...data, error: err.message })
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        {data.error && <>{data.error}</>}
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm
