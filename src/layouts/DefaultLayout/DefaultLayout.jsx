import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./DefaultLayout.scss";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
