import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import FormatedPrice from "./FormatedPrice";
import { useSelector } from "react-redux";
import { StoreProduct, StoreProps } from "../../type";

const CartPayment = () => {
  const { productData } = useSelector((state: StoreProps) => state.next);
  const [totalAmont, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quentity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-2">
        <span className=" bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className=" text-sm">
          Your order qualifies for FREE Shipping by Choosing this option at
          checkout. See details.....
        </p>
      </div>
      <p className=" flex items-center justify-between px-2 font-semibold">
        Tottal:{" "}
        <span className=" font-bold text-xl">
          {" "}
          <FormatedPrice amount={totalAmont} />
        </span>
      </p>
      <div className=" flex flex-col items-center">
        <button className=" w-full h-10 font-semibold bg-amazone_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
          Proceed to Buy
        </button>
        <p className=" text-xs mt-1 text-red-500 font-semibold animate-bounce">
          Please login to continue
        </p>
      </div>
    </div>
  );
};

export default CartPayment;
