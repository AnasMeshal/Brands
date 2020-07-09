//React
import React, { useState } from "react";
import { Helmet } from "react-helmet";

//Components
import BrandItem from "./BrandItem";
import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";

const BrandList = ({ brands }) => {
  const [query, setQuery] = useState("");

  const filteredBrand = brands.filter(
    (brand) =>
      brand.type.toUpperCase().includes(query.toUpperCase()) ||
      brand.material.toUpperCase().includes(query.toUpperCase()) ||
      brand.name.toUpperCase().includes(query.toUpperCase()) ||
      brand.price[0].toUpperCase().includes(query.toUpperCase())
  );

  const brandList = filteredBrand.map((brand) => (
    <BrandItem brand={brand} key={brand.id} />
  ));

  return (
    <>
      <Helmet>
        <title>Available Brands</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{brandList}</ListWrapper>
    </>
  );
};

export default BrandList;
