// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductCard;
