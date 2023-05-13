import React from "react";
import { UseFetch } from "../services/UseFetch";
import { Link } from "react-router-dom";

export const PokeItem = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <article className="card">
          <div className="new__overlay"></div>
          <div className="card-body">
            <div className={`card-body-contentimg ${data.types[0].type.name}`}>
<<<<<<< HEAD
              <Link to={'/pokemon/' + data?.id}>
=======
>>>>>>> a5f0557a84815f4e0b4764b0a2b50a3f9b2348a8
              <img
                src={data.sprites.other.dream_world.front_default}
                alt="pokemon"
                className="card-body-contentimg-img"
                width="150"
              />
<<<<<<< HEAD
              </Link>
=======
>>>>>>> a5f0557a84815f4e0b4764b0a2b50a3f9b2348a8
            </div>
            <h1 className="card-body-title">
              {data.name}
              <span> #{data.id}</span>
            </h1>
            <p className="card-body-text">coleccionable</p>
          </div>
          <div className="card-footer">
            {data.types.map((tipo, index) => {
              return (
                <div key={index} className={`card-footer-poder ${data.types[0].type.name}`}>
                  <p>{tipo.type.name}</p>
                </div>
              );
            })}
          </div>
        </article>
      )}
    </>
  );
};

