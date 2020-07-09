import React from "react";
import { useParams, Redirect } from "react-router-dom";

//Styles
import { DetailWrapper } from "../styles";

const BrandDetail = (props) => {
  const { brandSlug } = useParams();
  const brand = props.brands.find((brand) => brand.slug === brandSlug);

  if (!brand) return <Redirect to="/brands" />;

  return (
    <DetailWrapper>
      <p onClick={() => props.setBrands()}>Back to Brands</p>
      <h1> {brand.name}</h1>
      <img src={brand.image} alt={brand.name} />
      <p>{brand.description}</p>
      <p>{brand.price}</p>
    </DetailWrapper>
  );
};

export default BrandDetail;
