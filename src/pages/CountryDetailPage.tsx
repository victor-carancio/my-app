import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/context";
import Loading from "../components/loading";
import CountryDetail from "../components/CountryDetail";

const url = "https://restcountries.com/v3.1/name/";
const CountryDetailPage = () => {
  const { fetchCountryDetail, countryDetails, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchCountryDetail(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="country-detail">
      {countryDetails.map((item, index) => {
        return <CountryDetail key={index} countryDetail={item} />;
      })}
    </section>
  );
};

export default CountryDetailPage;
