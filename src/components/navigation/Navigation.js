import React from 'react';
import { NavLink, useParams } from 'react-router-dom'
import './navigation.css';

export const Navigation = () => {
   // const params = useParams();
   return (
      <header className="mainNavigation">
         <nav>
            <ul>
               <li><NavLink
                  to="/"
                  className={(navData) => navData.isActive ? "activeLink" : '' }
               >Home</NavLink></li>
               <li><NavLink
               to="/cart"
               className={(navData) => navData.isActive ? "activeLink" : '' }
               >Cart</NavLink></li>
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
