import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UseFetch } from "../services/UseFetch";
import "../assets/css/PokemonPage.css";

export const PokemonPage = () => {
  const { id } = useParams();
  const [currentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const estado = UseFetch(currentPageUrl);
  const { cargando, data } = estado;

  return (
    <>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <main className="container main-pokemon">
          <>
            <div className="header-main-pokemon">
              <span className="number-pokemon">#{data?.id}</span>
              <div className="container-img-pokemon">
                <img
                  src={data?.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${data?.name}`}
                />
              </div>

              <div className="container-info-pokemon">
                <h1>{data?.name}</h1>
                <div className="card-types info-pokemon-type">
                  {data?.types.map((type) => (
                    <p key={type.type.name} className={`${type.type.name}`}>
                      {type.type.name}
                    </p>
                  ))}
                </div>
                <div className="info-pokemon">
                  <div className="group-info">
                    <p>Altura</p>
                    <span>{data?.height}</span>
                  </div>
                  <div className="group-info">
                    <p>Peso</p>
                    <span>{data?.weight}KG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-stats">
              <h1>Estadísticas</h1>
              <div className="stats">
                <div className="stat-group">
                  <span>Hp</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[0].base_stat}
                  </span>
                </div>
                <div className="stat-group">
                  <span>Attack</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[1].base_stat}
                  </span>
                </div>
                <div className="stat-group">
                  <span>Defense</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[2].base_stat}
                  </span>
                </div>
                <div className="stat-group">
                  <span>Special Attack</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[3].base_stat}
                  </span>
                </div>
                <div className="stat-group">
                  <span>Special Defense</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[4].base_stat}
                  </span>
                </div>
                <div className="stat-group">
                  <span>Speed</span>
                  <div className="progress-bar"></div>
                  <span className="counter-stat">
                    {data?.stats[5].base_stat}
                  </span>
                </div>
              </div>
            </div>
          </>
        </main>
      )}
    </>
  );
};
