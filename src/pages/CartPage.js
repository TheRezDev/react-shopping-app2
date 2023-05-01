import React from 'react'
import { useCart, useCartActions } from '../Context/CartProvider';
import { Layout } from '../Layout/Layout';
import './cartPage.css';

const CartPage = () => {
   const { cart, total } = useCart();
   const dispatch = useCartActions();

   if (!cart.length)
      return (
         <Layout>
            <main>
               <h2>cart is empty!</h2>
            </main>
         </Layout>
      );

   const incHandler = (cartItem) => {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
   };
   const decHandler = (cartItem) => {
      dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
   };

   return (
      <Layout>
         <main className='container'>
            <section className='cartCenter'>
               <section className='cartItemList'>
               {cart.map((item) => {
                  return (
                     <div className='cartItem'>
                     <div className='itemImg'>
                        <img src={item.image} alt={item.name} />
                     </div>
                     <div>
                        {item.name}
                     </div>
                     <div>
                        {item.price * item.quantity}
                     </div>
                     <div>
                        <button onClick={() => decHandler(item) }>Remove</button>
                        <button>{item.quantity}</button>
                        <button onClick={() => incHandler(item) }>Add</button>
                     </div>
                  </div>
                  );
               })}
            </section>
            <section className='cartSummery'>
                  <h2>cart summary</h2>
                  <div>
                     {total}
                  </div>
            </section>
            </section>
         </main>
      </Layout>
   );
};

export default CartPage;
