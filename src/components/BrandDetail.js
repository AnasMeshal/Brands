import React from "react";
import { useParams, Redirect, useHistory, Link } from "react-router-dom";

//Styles
import {
  DetailWrapper,
  RecommendedImage,
  RecommendedImageWrapper,
  RecommendedImageStyling,
} from "../styles";

const BrandDetail = (props) => {
  const { brandSlug } = useParams();
  const history = useHistory();

  const brand = props.brands.find((brand) => brand.slug === brandSlug);

  const goBack = () => {
    //This function is for going back to the brands list
    history.push("/brands");
  };

  if (!brand) return <Redirect to="/brands" />;

  const recommandationFiltred = props.brands.filter((brand) => {
    if (brand.type === "Bag") {
      return brand.bagImage;
    } if (brand.type === "Wallet") {
      return brand.walletImage; 
    } else return null ;
  });
  // brand.type === "Shoe" ? brand.image : null

  const recommandationBrandList = recommandationFiltred.map((brand) => (
    <RecommendedImageStyling>
      <Link to={`/brands/${brand.slug}`}>
        <RecommendedImage src={brand.image} />
      </Link>
    </RecommendedImageStyling>
  ));

  return (
    <DetailWrapper>
      <p onClick={goBack}>Back to Brands</p>
      <h1> {brand.name}</h1>
      <img src={brand.image} alt={brand.name} />
      <p>{brand.description}</p>
      <p>{brand.price}</p>
      <p>Recommended</p>
      <RecommendedImageWrapper>
        {recommandationBrandList}
      </RecommendedImageWrapper>
    </DetailWrapper>
  );
};

export default BrandDetail;
