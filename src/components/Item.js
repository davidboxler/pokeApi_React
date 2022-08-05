import React from "react";
import { PokeItem } from "./PokeItem";

export const Item = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((p) => (
          <li className="card-item" key={p.name}>
            <PokeItem url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
