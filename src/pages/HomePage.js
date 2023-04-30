import React from 'react'
import * as data from '../data';


export const HomePage = () => {

   const addProductHandler= (product) => {
   console.log(product);
   }
   return (
         <main className='container'>
         <section className="productList">
            {data.products.map((product) => {
               return(
               <section className="product">
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

