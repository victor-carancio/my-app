import React from "react";
import { useGlobalContext } from "../contexts/context";
import { CgArrowLongLeft } from "react-icons/cg";
const Filter = () => {
  const { setFilter } = useGlobalContext();

  return (
    <div className="filters-container-filter">
      <select
        className="filter-select"
        name="filter"
        id="filter"
        onChange={(e) => setFilter(e.target.value)}
        /* styles={colourStyles} */
      >
        <option value="" defaultValue={""}>
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
