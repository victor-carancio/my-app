import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedNavbar from "./pages/sharedNav";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useCustomSelector, useCustomDispatch } from "./hooks/redux";
import CountryDetailPage from "./pages/CountryDetailPage";
import { getCountryList } from "./features/country/countrySlice";

import { NotFound } from "./components/NotFound";

function App() {
  const dispatch = useCustomDispatch();
  const { isDark, search, filter } = useCustomSelector(
    (store) => store.country
  );

  useEffect(() => {
    dispatch(getCountryList());
  }, [search, filter]);

  return (
    <main className={isDark ? "dark-theme" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedNavbar />}>
            <Route index element={<Home />} />
            <Route path="/country/:id" element={<CountryDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
