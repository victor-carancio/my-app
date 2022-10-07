import React, { useState, useContext, createContext, useEffect } from "react";
import { CountriesContextValue } from "./CountriesContextValue";
import { getCountries } from "../api/countriesApi";
import CountryInitialState from "./CountryInitialState";
import { getFilterCountries } from "../api/countriesApi";
import { getCountryDetail } from "../api/countriesApi";

const AppContext = createContext<CountriesContextValue>({
  ...CountryInitialState,
});

const AppProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [countries, setCountries] = useState<any[]>([]);
  const [countryDetails, setCountryDetails] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const getResponse = (response: any) => {
    if (response) {
      setCountries(response);
    } else {
      setCountries([]);
    }
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      if (filter && !search) {
        const response = await getFilterCountries(filter);
        getResponse(response);
      }
      if ((filter && search) || (!filter && search) || (!filter && !search)) {
        const response = await getCountries(search);
        getResponse(response);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, filter]);

  const fetchCountryDetail = async (id: string) => {
    setLoading(true);
    try {
      const response = await getCountryDetail(id);
      setCountryDetails(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <AppContext.Provider
      value={{
        isDark,
        setIsDark,
        countries,
        loading,
        search,
        setSearch,
        setFilter,
        fetchCountryDetail,
        countryDetails,
        setCountryDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
