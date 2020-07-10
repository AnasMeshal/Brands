import React from "react";
import { useParams, Redirect, useHistory, Link } from "react-router-dom";

//Styles
import {
  DetailWrapper,
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
    // returns an array of type == brand.type specified
    if (props.brands.length === 4) {
      return null;
    } else {
      if (brand.type === "Bag") {
        return brand.image;
      } else {
        return null;
      }
    }
  });

  const recommandationBrandList = recommandationFiltred.slice(0, 4).map((
    brand // Links to the item in the rec list
  ) => (
    <RecommendedImageStyling>
      <Link to={`/brands/${brand.slug}`}>
        <img src={brand.image} />
      </Link>
    </RecommendedImageStyling>
  ));

  return (
    <DetailWrapper>
      <p onClick={goBack}>Back to Brands</p>
      <h1> {brand.name}</h1> {/*header*/}
      <img src={brand.image} alt={brand.name} /> {/*image of the item*/}
      <p>{brand.description}</p> {/*item desc*/}
      <p>{brand.price}</p>
      <p>Recommended</p>
      <RecommendedImageWrapper>
        {recommandationBrandList} {/*Where we are calling the rec list*/}
      </RecommendedImageWrapper>
    </DetailWrapper>
  );
};

export default BrandDetail;
