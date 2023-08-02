import React from 'react';
import ProductBadge from './ProductBadge';
import ProductRatings from './ProductRatings';

const ProductDetails = ({ product, rating }) => {
  const {
    title, brand, avgRating, attribute, badge, ratings,
  } = product;
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">{title}</div>
      <div className="text-sm xl:text-base mb-1">
        By
        <span className="text-blue-500 ml-1">{brand}</span>
      </div>
      {
        rating
        && (
        <div className="text-sm xl:text-base mb-1">
          <ProductRatings avgRating={avgRating} ratings={ratings} />
        </div>
        )
      }
      <div className="text-xs xl:text-sm font-bold mb-1">{attribute}</div>
      <div><ProductBadge badge={badge} /></div>
    </div>
  );
};

export default ProductDetails;
