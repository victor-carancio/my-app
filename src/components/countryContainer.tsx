import React from "react";
import { useGlobalContext } from "../contexts/context";
import CountryItem from "./CountryItem";
import ErrorSearch from "./ErrorSearch";
import Loading from "./loading";

const CountryContainer = () => {
  //asd
  const { countries, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (countries.length < 1) {
    return <ErrorSearch />;
  }
  return (
    <div className="country-container">
      {countries.map((item, index) => {
        return <CountryItem key={index} country={item} />;
      })}
    </div>
  );
};

export default CountryContainer;
