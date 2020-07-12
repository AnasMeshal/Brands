//React
import React from "react";

//Components
import RecommendedItems from "./RecommendedItems";

//Styles
import { RecommendedImageWrapper } from "../styles";

//We did the same as the
const RecommendedList = ({ brands, brand }) => {
  const recommandationFiltred = brands.filter(
    (item) => item.type === brand.type
  );

  const recFilteredRandomised = recommandationFiltred
    .slice(0, 4)
    .map(function () {
      return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, recommandationFiltred.slice())
    .map((item2) => <RecommendedItems item2={item2} key={item2.id} />);

  return (
    <RecommendedImageWrapper>{recFilteredRandomised}</RecommendedImageWrapper>
  );
};

export default RecommendedList;
