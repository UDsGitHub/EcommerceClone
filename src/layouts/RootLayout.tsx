import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Footer, Navbar } from "../components";

type Props = {};

const RootLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
