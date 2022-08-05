import React from "react";
import { UseFetch } from "../services/UseFetch";

export const PokeItem = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div className={`card-pokemon ${data.types[0].type.name}`}>
          <div className="card-header">
            <h3 className="card-name">{data.name}</h3>
            <h5 className="card-id">#0{data.id}</h5>
            <div className="card-types">
              {data.types.map((tipo, index) => {
                return <p>{tipo.type.name}</p>;
              })}
            </div>
          </div>
          <img
            className="imagen"
            src={data.sprites.other.dream_world.front_default}
            alt="pokemon"
          ></img>
        </div>
      )}
    </div>
  );
};
