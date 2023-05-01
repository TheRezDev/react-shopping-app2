import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Route, Routes } from "react-router-dom"
import { Layout } from './Layout/Layout';

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

