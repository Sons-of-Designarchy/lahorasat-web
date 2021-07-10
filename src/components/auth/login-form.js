import React, { useState, useContext } from "react";
import firebase from "gatsby-plugin-firebase";
import { AuthContext } from "../../context/auth";
import { navigate } from 'gatsby';
import SharedLinks from "./shared-links";

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
      <div className="form-card">
        <h5 className="text-center mb-4">Iniciar sesión</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" for="#email">Tu email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label for="#password" className="form-label">Tu contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {data.error && <>{data.error}</>}
          <input type="submit" value="Enviar" className="btn btn-primary btn-lg w-100" />
          <p className="mt-3 text-center font-sm">
            Aún no tienes cuenta? <a href="/registro" className="text-underline">Registrate</a>
          </p>
        </form>
        <SharedLinks />
      </div>
    </>
  );
};

export default LoginForm
