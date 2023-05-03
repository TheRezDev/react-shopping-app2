import React from 'react';
import { HomePage } from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"
import { Layout } from './Layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart-page" element={<CartPage />} />
    </Routes>
    </Layout>
  );
};

export default App;

