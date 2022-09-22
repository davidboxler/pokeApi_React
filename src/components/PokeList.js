import React, { useState } from "react";
import { UseFetch } from "../services/UseFetch";
import { Item } from "./Item";

export const PokeList = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const estado = UseFetch(currentPageUrl);
  const { cargando, data } = estado;

  return (
    <section className="gift section container">
      <h2 className="section__title">Pokedex</h2>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="gift__container grid">
          <Item results={data.results} />
        </div>
      )}
      <div className="section__button">
        <button
          onClick={() => setCurrentPageUrl(data.previous)}
          className="btn"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPageUrl(data.next)}
          className="btn"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
