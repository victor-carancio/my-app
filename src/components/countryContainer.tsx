import CountryItem from "./CountryItem";
import ErrorSearch from "./ErrorSearch";
import Loading from "./loading";

import { useCustomSelector } from "../hooks/redux";

const CountryContainer = () => {
  const { isLoading, countriesList } = useCustomSelector(
    (store) => store.country
  );

  // console.log(countriesList);

  if (isLoading) {
    return <Loading />;
  }
  if (countriesList.length < 1) {
    return <ErrorSearch />;
  }
  return (
    <div className="country-container">
      {countriesList.map((item, index) => {
        return <CountryItem key={index} country={item} />;
      })}
    </div>
  );
};

export default CountryContainer;
