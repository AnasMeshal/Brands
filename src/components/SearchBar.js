//React
import React from "react";

//Styles
import { Search, SearchWrapper } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchWrapper>
      <Search
        placeholder="Search for your brand Type, Name, Material or Price"
        onChange={(event) => setQuery(event.target.value)}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
