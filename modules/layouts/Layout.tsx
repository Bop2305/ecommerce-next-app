import React from "react";
import MainLayout from "./MainLayout";

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <MainLayout>
    {children}
  </MainLayout>
}

export default Layout; 