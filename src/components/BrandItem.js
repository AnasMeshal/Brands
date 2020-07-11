//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { ShopImage, ItemWrapper } from "../styles";

const BrandItem = ({ brand }) => {
  return (
    <ItemWrapper>
      <Link to={`/brands/${brand.slug}`}>
        <ShopImage src={brand.image} alt={brand.name} />
      </Link>
      <p>{brand.name}</p>
      <p className="item-price">{brand.price}</p>
      </ItemWrapper>
  );
};

export default BrandItem;
