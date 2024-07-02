import React, { useEffect, useState } from 'react';
import { fetchTopProducts } from '../services/apiService';
import ProductList from '../components/ProductList';

const ProductDetailPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const topProducts = await fetchTopProducts('AMZ', 'Phone', 100, 1000, 5);
        setProducts(topProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Top Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductDetailPage;
