import React from 'react'
import * as data from '../data';
import { useCartActions } from '../Context/CartProvider';

export const HomePage = () => {
   const dispatch = useCartActions();
   const addProductHandler = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
   };

   return (
         <main className='container'>
         <section className="productList">
            {data.products.map((product) => {
               return(
               <section className="product" key={product.id}>
                  <div className="productImage">
                     <img src={ product.image} alt={product.name}/>
                  </div>
                  <div className='productDesc'>
                        <p>{product.name}</p>
                        <p>$ {product.price}</p>
                        <button
                           onClick={() =>
                              addProductHandler(product)}
                           className='btn primary'
                        >
                           add to Cart
                        </button>
                  </div>
               </section>
            );
            })}
         </section>
      </main>
   );
};

