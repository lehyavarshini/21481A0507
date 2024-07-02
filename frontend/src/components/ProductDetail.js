import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary">
          Company: {product.company}, Category: {product.category}
        </Typography>
        <Typography variant="body2" component="p">
          Price: ${product.price}, Rating: {product.rating}, Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" component="p">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
