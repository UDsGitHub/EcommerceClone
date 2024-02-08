import React from "react";
import { Hero } from "..";
import { NavLink } from "react-router-dom";
import CollectionsSection from "./CollectionsSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Hero />
      <CollectionsSection/>
      <div>
        <img
          src="//www.thehorse.com.au/cdn/shop/files/web.jpg?v=1705960019&width=352 352w, //www.thehorse.com.au/cdn/shop/files/web.jpg?v=1705960019&width=832 832w, //www.thehorse.com.au/cdn/shop/files/web.jpg?v=1705960019&width=1200 1200w, //www.thehorse.com.au/cdn/shop/files/web.jpg?v=1705960019&width=1920 1920w, //www.thehorse.com.au/cdn/shop/files/web.jpg?v=1705960019&width=2000 2000w"
          alt=""
        />
      </div>
    </>
  );
};

export default HomePage;
