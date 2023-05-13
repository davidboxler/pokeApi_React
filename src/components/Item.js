import React from "react";
import { PokeItem } from "./PokeItem";

export const Item = ({ results }) => {
  return (
    <>
        {results.map((p) => (
            <PokeItem key={p.name} url={p.url} />
        ))}
    </>
  );
};
