import React, { useState } from "react";
import { UseFetch } from "../services/UseFetch";
import { PokeItem } from "../components/PokeItem";

export const SearchPage = () => {
  const searchValue = window.location.href.split("=")[1];
  
  const [currentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${searchValue}`
  );
  const estado = UseFetch(currentPageUrl);
  const { cargando, data } = estado;

  const url = `https://pokeapi.co/api/v2/pokemon/${data?.id}`;

  return (
    <>
      {cargando && data ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="container">
          <p className="p-search">
            Se encontraron <span></span> resultados:
          </p>
          {data != null ? (
            <div className="card-list-pokemon container">
              <PokeItem key={data?.name} url={url} />
            </div>
          ) : (
            <div className="card-list-pokemon container">
              <p className="p-search">
                No se encontraron <span></span> resultados:
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
