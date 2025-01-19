import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import CountryDetail from "../components/CountryDetail";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { getCountryDetails } from "../features/country/countrySlice";
import ErrorSearch from "../components/ErrorSearch";

const CountryDetailPage = () => {
  const dispatch = useCustomDispatch();
  const { countryDetails, isLoading } = useCustomSelector(
    (store) => store.country
  );
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!countryDetails) {
    return <ErrorSearch />;
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
