import React from 'react'
import { useContext, useReducer, createContext } from 'react'

const CartContext = createContext();
const CartContextDispatcher = createContext();

export const CartProvider = ({ children }) => {
   const [cart,dispatch] = useReducer(reducer, []);
   return (
      <CartContext.CartProvider value={cart} >
         <CartContextDispatcher.Provider value={dispatch}>
            {children}
         </CartContextDispatcher.Provider>
      </CartContext.CartProvider>
   );
};
