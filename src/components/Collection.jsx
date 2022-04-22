import Wrapper from "./Wrapper/Wrapper";
import Product from "./Product/Product";
import React from "react";
import CollectionItem from "./CollectionItem/CollectionItem";

const Collection = ({center}) => {
  return (
    <div className="collection" style={{'paddingTop': 44}}>
      <Wrapper title="Колекция" center={center}>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
        <CollectionItem/>
      </Wrapper>
      <button className="more-btn">Еще</button>
    </div>
);
};

export default Collection;
