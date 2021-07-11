import React, { useState, useContext } from "react";
import firebase from "gatsby-plugin-firebase";
import { AuthContext } from "../context/auth";
import { navigate } from 'gatsby';

const RegisterForm = () => {
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
      <div className="form-card">
        <h5 className="text-center mb-4">Registrate en La Hora Sat</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="#email" className="form-label">Tu Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label for="#password" className="form-label">Crea una contraseña</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="form-control"
            />
            {data.error && <div className="alert alert-danger font-sm text-center my-4">{data.error}</div>}
          </div>
          <input type="submit" value="Enviar" className="btn btn-primary btn-lg w-100" />
          <p className="mt-3 text-center font-sm">
            Ya tienes cuenta? <a href="/login" className="text-underline">Inicia sesión</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterForm
