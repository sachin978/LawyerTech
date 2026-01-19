import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="container">{children}</main>
      </div>
    </>
  );
}

export default MainLayout;
