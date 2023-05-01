import React from 'react'
import { useContext, useReducer, createContext } from 'react';
import cartReducer from './cartReducer';

const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
   cart: [],
   total: 0,
};

export const CartProvider = ({ children }) => {
   const [cart,dispatch] = useReducer(cartReducer, initialState);
   return (
      <CartContext.Provider value={cart} >
         <CartContextDispatcher.Provider value={dispatch}>
            {children}
         </CartContextDispatcher.Provider>
      </CartContext.Provider>
   );
};

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);