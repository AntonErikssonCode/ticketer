import React, { ReactNode } from 'react';
import "./layout.css"

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout-container center'>
      {children}
    </div>
  );
};

export default Layout;
