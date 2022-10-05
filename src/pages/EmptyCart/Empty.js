import React from "react";
import EmptyCart from "./EmptyCart";
import RecentlyViewed from "../../components/RecentlyViewed";
import "./EmptyCart.css";

const Empty = () => {
  return (
    <>
      <EmptyCart />
      <RecentlyViewed />
      <img
        className="petimg"
        src="https://github.com/Moyeenwaz/pet-store-client/blob/Junnygram-patch-1/Dog.png?raw=true"
        alt=""
      />
    </>
  );
};

export default Empty;
