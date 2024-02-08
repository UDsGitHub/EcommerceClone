import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="h-[70px] px-6 flex items-center justify-between">
      <button className="mr-9">
        <span className="material-symbols-outlined block text-center w-5 h-5">
          menu
        </span>
      </button>
      <ul className="flex items-center gap-9">
        <li>
          <p className="hover:underline cursor-pointer">Women</p>
        </li>
        <li>
          <p className="hover:underline cursor-pointer">Men</p>
        </li>
        <li>
          <p className="hover:underline cursor-pointer">Sale</p>
        </li>
      </ul>
      <div className="grow flex justify-center items-center">
        <NavLink
          to="/"
          className="font-noto-serif-jp text-center text-[22px] font-bold tracking-widest"
        >
          THEHORSE
        </NavLink>
      </div>
      <ul className="flex items-center gap-6">
        <li>
          <NavLink className={"hover:underline"}>My Account</NavLink>
        </li>
        <li>
          <NavLink className="flex justify-center items-center">
            <span className="material-symbols-outlined">favorite</span>
          </NavLink>
        </li>
        <li>
          <button className="flex justify-center items-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </li>
        <li>
          <button className="flex justify-center items-center">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
