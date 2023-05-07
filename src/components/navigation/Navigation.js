import React from 'react';
import { NavLink } from 'react-router-dom'
// import { useCart } from '../../Context/CartProvider';
import './navigation.css';


const Navigation = () => {
   // const {cart} = useCart();
   return (
      <header className="mainNavigation">
         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={(navData) => navData.isActive ? "activeLink" : ''}>
                     Home
                  </NavLink>
               </li>
               <li className="cartLink">
                  <NavLink
                     to="/cart"
                     className={(navData) => navData.isActive ? "activeLink" : ''}>
                     Cart
                     {/* {cart.length} */}
                  </NavLink></li>
            </ul>
            <div>
               <h3>
                  Reza-Shopping
               </h3>
            </div>
         </nav>
      </header>
   );
};

export default Navigation;