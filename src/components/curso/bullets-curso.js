// import { Link } from "gatsby"
import React from "react";

const BulletsCurso = ({ bullets }) => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          <h2 className="mb-5">¿Qué incluye?</h2>
          <div className="boxed-bullet-container row">
            {bullets.map((bullet) => (
              <div className="col-lg-4">
                <div className="boxed-bullet">{bullet}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsCurso;