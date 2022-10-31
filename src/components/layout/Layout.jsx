import React from 'react';
import SideMenu from '../sideMenu/SideMenu';


const Layout = ({ children }) => (
  <>
    <div>
      <SideMenu/>
      <div>{children}</div>
    </div>
  </>
);

export default Layout;
