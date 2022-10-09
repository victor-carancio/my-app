import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedNavbar from "./pages/sharedNav";
import Home from "./pages/Home";
import { useState } from "react";
import { useGlobalContext } from "./contexts/context";
import CountryDetailPage from "./pages/CountryDetailPage";

function App() {
  const { isDark } = useGlobalContext();

  return (
    <main className={isDark ? "dark-theme" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/rest-countries-api" element={<SharedNavbar />}>
            <Route index element={<Home />} />
            <Route
              path="/rest-countries-api/country/:id"
              element={<CountryDetailPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
