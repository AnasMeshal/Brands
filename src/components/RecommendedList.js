//React
import React from "react";

//Components
import RecommendedItems from "./RecommendedItems";

//Styles
import { RecommendedImageWrapper } from "../styles";

//We did the same as the 
const RecommendedList = ({ brands, brand }) => {
  const recommandationFiltred = brands
    .filter((item) => item.type === brand.type)
    .slice(0,4)
    .map((item2) => <RecommendedItems item2={item2} key={item2.id} />);

  return (
    <RecommendedImageWrapper>{recommandationFiltred}</RecommendedImageWrapper>
  );
};

export default RecommendedList;