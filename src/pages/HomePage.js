import React from 'react'
import * as data from '../data';
import { useCart, useCartActions } from '../Context/CartProvider';
import { checkInCart } from '../utils/checkInCart';
import { toast } from 'react-toastify';



const HomePage = () => {
   const { cart } = useCart();

   const dispatch = useCartActions();
   const addProductHandler = (product) => {
      toast.success(`${product.name} added to Cart !`);
      dispatch({ type: 'ADD_TO_CART', payload: product });
   };

   return (
         <main className='container'>
         <section className="productList">{data.products.map((product) => {
               return(
               <section className="product" key={product.id}>
                  <div className="productImage">
                     <img src={product.image} alt={product.name}/>
                  </div>
                  <div className='productDesc'>
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                        <button
                           className='btn primary'
                           onClick={() =>addProductHandler(product)}
                        >
                           {checkInCart(cart, product) ? 'In Cart' : 'Add To Cart'}
                        </button>
                  </div>
               </section>
            );
            })}
         </section>
      </main>
   );
};

export default HomePage;