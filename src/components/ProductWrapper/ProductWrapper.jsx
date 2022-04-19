import React from 'react';

const ProductWrapper = (props) => {
  return (
    <div className="product-wrapper">
      {props.children}
    </div>
  );
};

export default ProductWrapper;
