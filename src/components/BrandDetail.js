import React from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

//Styles
import { DetailWrapper, GoBack } from "../styles";

//Components
import RecommendedList from "./RecommendedList";

const BrandDetail = ({ brands }) => {
  const { brandSlug } = useParams();
  const history = useHistory();

  const brand = brands.find((brand) => brand.slug === brandSlug);

  const goBack = () => {
    history.push("/brands"); //This function is for going back to the brands list
  };

  if (!brand) return <Redirect to="/brands" />;

  return (
    <DetailWrapper>
      <Helmet>
        <title>{brand.name}</title>
      </Helmet>
      <h1> {brand.name}</h1> {/*header*/}
      <img src={brand.image} alt={brand.name} /> {/*image of the item*/}
      <p>{brand.description}</p> {/*item desc*/}
      <p>Material: {brand.material}</p>
      <p>Size: {brand.size}</p>
      <p>{brand.price}</p>
      <p>Recommended</p>
      <RecommendedList brand={brand} brands={brands} />
      {/*Where we are calling the rec list*/}
      <GoBack onClick={goBack}>Back to Brands</GoBack>
    </DetailWrapper>
  );
};

export default BrandDetail;
