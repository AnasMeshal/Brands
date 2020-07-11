//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
import { RecommendedImageStyling } from "../styles";

const RecommendedItems = ({ item2 }) => {
  return (
    // Links to the item in the rec list
    <Link to={`/brands/${item2.slug}`}>
      <RecommendedImageStyling>
        <img src={item2.image} alt={item2.name} />
      </RecommendedImageStyling>
    </Link>
  );
};

export default RecommendedItems;
