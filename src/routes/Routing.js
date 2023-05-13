import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Navigation } from "../components/Navigation";
import { PokemonPage } from "../components/PokemonPage";
import { SearchPage } from "../pages/SearchPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="pokemon/:id" element={<PokemonPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <p>
                <h1>Error 404</h1>
                <Link className="btn" to="/">
                  Volver al Inicio
                </Link>
              </p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
