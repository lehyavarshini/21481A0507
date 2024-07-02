import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
        <Route path="/" element={<Navigate replace to="/all-products" />} />
      </Routes>
    </Router>
  );
};

export default App;
