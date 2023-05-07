import React from 'react';
import { Route, Routes } from "react-router-dom"
import CartProvider  from './Context/CartProvider';
import { Layout } from './Layout/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SingUp';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Layout>
      <CartProvider>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Layout>
  );
};

export default App;

