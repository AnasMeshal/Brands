//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";

//Components
import BrandItem from "./BrandItem";
// import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";

const BrandList = ({ brands, searchBrands }) => {
  const [query, setQuery] = useState("");

  const brandList = brands.map((brand) => (
    <BrandItem brand={brand} key={brand.id} />
  ));

  // const brandList = filteredBrand.map((brand) => (
  //   <BrandItem brand={brand} key={brand.id} />
  // ));

  return (
    <>
      <Helmet>
        <title>Available Brands</title>
      </Helmet>

      <ListWrapper>{brandList}</ListWrapper>
    </>
  );
};

export default BrandList;

// <SearchBar setQuery={setQuery} searchMangas={searchBrands} />

// <BrandItem brand={brand} deleteBrand={deleteBrand} key={brand.id} />
