import React from "react";
import Navbar from "../Navbar/Navbar";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
