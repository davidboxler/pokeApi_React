import React, { useState } from "react";
import { UseFetch } from "../services/UseFetch";
import { Item } from "./Item";
import Logo from "../assets/img/Pokédex_logo.png";
import { Link } from "react-router-dom";

export const PokeList = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const estado = UseFetch(currentPageUrl);
  const { cargando, data } = estado;

  return (
    <section className="gift section container">
      <Link to={"/"}>
        <h2 className="section__title">
          <img src={Logo} alt="Logo_pokedex" />
        </h2>
      </Link>

      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="gift__container grid">
          <Item results={data.results} />
        </div>
      )}
      <div className="section__button">
        {data?.previous != null ? (
          <button
            onClick={() => setCurrentPageUrl(data.previous)}
            className="btn"
          >
            Anterior
          </button>
        ) : (
          <button
            onClick={() => setCurrentPageUrl(data.previous)}
            className="btn"
            style={{ display: "none" }}
          >
            Anterior
          </button>
        )}

        {data?.next != null ? (
          <button onClick={() => setCurrentPageUrl(data.next)} className="btn">
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => setCurrentPageUrl(data.next)}
            className="btn"
            style={{ display: "none" }}
          >
            Siguiente
          </button>
        )}
      </div>
    </section>
  );
};
