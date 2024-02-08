import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const CollectionsSection = (props: Props) => {
  return (
    <div className="px-12 flex gap-6 my-[30px]">
      <div>
        <NavLink>
          <img
            src="//www.thehorse.com.au/cdn/shop/files/category_945dee37-5600-4be9-9643-f3e82096edc7_632x.jpg?v=1705961400"
            alt="womens backpacks"
          />
        </NavLink>
        <NavLink
          className={
            "font-light text-sm tracking-widest flex items-center gap-2 mt-2"
          }
        >
          <span>WOMEN'S BACKPACKS</span>
          <svg viewBox="0 0 20 14" className="w-4 h-3 fill-current">
            <path d="M13.3 0l-.8.7 5.6 5.8H.1v1h18l-5.6 5.8.8.7L20 7z"></path>
          </svg>
        </NavLink>
      </div>
      <div>
        <NavLink>
          <img
            src="//www.thehorse.com.au/cdn/shop/files/category2_e7ba72a1-4e65-4972-bc56-0095cd4c08b7_632x.jpg?v=1705961418"
            alt="women's bags"
          />
        </NavLink>
        <NavLink
          className={
            "font-light text-sm tracking-widest flex items-center gap-2 mt-2"
          }
        >
          <span>WOMEN'S BAGS</span>
          <svg viewBox="0 0 20 14" className="w-4 h-3 fill-current">
            <path d="M13.3 0l-.8.7 5.6 5.8H.1v1h18l-5.6 5.8.8.7L20 7z"></path>
          </svg>
        </NavLink>
      </div>
      <div>
        <NavLink>
          <img
            src="//www.thehorse.com.au/cdn/shop/files/category3_62682c68-b98d-416a-a0d8-150d152c98f4_632x.jpg?v=1705961436"
            alt="women's watches"
          />
        </NavLink>
        <NavLink
          className={
            "font-light text-sm tracking-widest flex items-center gap-2 mt-2"
          }
        >
          <span>WOMEN'S WATCHES</span>
          <svg viewBox="0 0 20 14" className="w-4 h-3 fill-current">
            <path d="M13.3 0l-.8.7 5.6 5.8H.1v1h18l-5.6 5.8.8.7L20 7z"></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default CollectionsSection;
