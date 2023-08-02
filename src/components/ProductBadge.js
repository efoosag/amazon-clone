import React from 'react';
import PropTypes from 'prop-types';

const ProductBadge = ({ badge }) => {
  if (badge === 'choice') {
    return (
      <span className="text-xs xl:text-sm bg-slate-800 text-white rounded p-1">
        Amazon&#39;s
        {' '}
        <span className="text-orange-500">Choice</span>
      </span>
    );
  } if (badge === 'seller') {
    return (
      <span className="text-xs xl:text-sm bg-orange-500 text-white rounded p-1">#1 Best Seller</span>
    );
  } if (badge === 'limited') {
    return (
      <span className="text-xs xl:text-sm bg-red-500 text-white rounded p-1">Limited time Deals</span>
    );
  }
  return '';
};

ProductBadge.propTypes = {
  badge: PropTypes.string,
};

ProductBadge.defaultProps = {
  badge: '',
};

export default ProductBadge;
