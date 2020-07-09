//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { ShopImage, ItemWrapper } from "../styles";

//Components
// import DeleteButton from "./buttons/DeleteButton";

const BrandItem = ({ brand }) => {
  return (
    <ItemWrapper>
      <Link to={`/brands/${brand.slug}`}>
        <ShopImage src={brand.image} alt={brand.name} />
      </Link>
      <p>{brand.name}</p>
      <p className="item-price">{brand.price}KD</p>
    </ItemWrapper>
  );
};

export default BrandItem;