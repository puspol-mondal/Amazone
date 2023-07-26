import React from "react";
import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className=" w-full h-10 bg-amazone_light text-sm text-white px-4 flex items-center">
      <p className=" flex items-center gap-1 h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        <LuMenu className="text-xl" />
        All
      </p>
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        Today Deals
      </p>{" "}
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        Customer Service
      </p>{" "}
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        Registry
      </p>{" "}
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        Gift Cards
      </p>{" "}
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-white duration-300 cursor-pointer px-2">
        Sell
      </p>{" "}
      <p className=" hidden md:inline-flex items-center h-8 border border-transparent hover:border-red-600 hover:text-red-600 text-amazone_yellow duration-300 cursor-pointer px-2">
        Sign Out
      </p>
    </div>
  );
};

export default BottomHeader;
