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
