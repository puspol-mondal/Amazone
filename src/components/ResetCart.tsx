import { resetCart } from "@/store/api/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const heldleResetCart = () => {
    const confrimReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confrimReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={heldleResetCart}
      className=" w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      reset cart
    </button>
  );
};

export default ResetCart;
