import React from 'react'
import Navigation from '../components/navigation/Navigation';

export const Layout = ({ children }) => {
   return (
      <div>
         <Navigation/>
         {children}
      </div>
   );
};
