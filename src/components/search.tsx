import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useCustomDispatch } from "../hooks/redux";
import { useState } from "react";
import { setSearch } from "../features/country/countrySlice";

const Search = () => {
  const dispatch = useCustomDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchInput !== "") {
      dispatch(setSearch(searchInput));
      setSearchInput("");
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit} className="filters-container-search">
      <AiOutlineSearch className="search-logo" />
      <input
        type="text"
        placeholder="Search for a country"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
