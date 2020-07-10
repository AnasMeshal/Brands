import React from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

//Styles
import { DetailWrapper } from "../styles";

const BrandDetail = (props) => {
  const { brandSlug } = useParams();
  const history = useHistory();

  const brand = props.brands.find((brand) => brand.slug === brandSlug);

  const goBack = () => {
    //This function is for going back to the brands list
    history.push("/brands");
  };

  if (!brand) return <Redirect to="/brands" />;

  return (
    <DetailWrapper>
      <p onClick={goBack}>Back to Brands</p>
      <h1> {brand.name}</h1>
      <img src={brand.image} alt={brand.name} />
      <p>{brand.description}</p>
      <p>{brand.price}</p>
    </DetailWrapper>
  );
};

export default BrandDetail;
