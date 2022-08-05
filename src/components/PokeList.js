import React, { useState } from "react";
import { UseFetch } from "../services/UseFetch";
import { Item } from "./Item";

export const PokeList = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const estado = UseFetch(currentPageUrl);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <div>
      <h1>Esta es la pagina de los pokemons</h1>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <Item results={data.results} />
          <div className="container m-auto">
            <button
              onClick={() => setCurrentPageUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPageUrl(data.next)}
              className="m-2 btn btn-dark"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
