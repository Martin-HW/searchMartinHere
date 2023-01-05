import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  console.log(query);

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>
        <i>Martin's search hacker news</i>
      </h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
