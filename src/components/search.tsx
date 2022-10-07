import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../contexts/context";

const Search = () => {
  const { search, setSearch } = useGlobalContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="filters-container-search">
      <AiOutlineSearch className="search-logo" />
      <input
        type="text"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
