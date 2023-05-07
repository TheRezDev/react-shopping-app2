import React from 'react'
import { useCart, useCartActions } from '../Context/CartProvider';
import './cartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
   const { cart, total } = useCart();
   const dispatch = useCartActions();

   if (!cart.length)
      return (

            <main>
               <h2>Cart is empty!</h2>
            </main>
         
      );

   const incHandler = (cartItem) => {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
   };
   const decHandler = (cartItem) => {
      dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
   };

   return (

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
                           {item.offPrice * item.quantity}
                        </div>
                        <div className="btnGroup">
                           <button onClick={() => decHandler(item)}>-</button>
                           <button >{item.quantity}</button>
                           <button onClick={() => incHandler(item) }>+</button>
                        </div>
                  </div>
                  );
               })}
            </section>
            <CartSummary cart={cart} total={total} />
            </section>
         </main>
   );
};

export default CartPage;


const CartSummary = ({ total, cart }) => {
   const originalTotalPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
      : 0;

   return (
      <section className='cartSummery'>
         <h2 style={{ marginBottom: '10px' }}>cart summary</h2>
         <div className='summeryItem'>
            <p>Original total price</p>
            <p>{originalTotalPrice} $</p>
         </div>
         <div  className='summeryItem'>
            <p>cart discount</p>
            <p>{originalTotalPrice - total} $</p>
         </div>
         <div className='summeryItem net'>
            <p>net price</p>
            <p>{total} $</p>
         </div>
         <Link to='/checkout'>
            <button className='btn primary' style={{ marginTop: '20px 0', width:'100%' }}>
               Go to Check out !
            </button>
         </Link>
      </section>
   );
};