import Image from "next/image";
import React from "react";
import FormatedPrice from "./FormatedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/api/nextSlice";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quentity: number;
  _id: number;
}

interface cartProductProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductProps) => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-gray-100 rounded-lg flex items-center gap-4 my-2">
      <Image
        className=" object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className=" flex items-center px-2 ga4">
        <div className=" flex flex-col gap-1">
          <p className=" text-lg font-semibold text-amazone_blue">
            {item.title}{" "}
          </p>
          <p className=" text-sm text-gray-600">{item.description} </p>
          <p className=" text-sm text-gray-600">
            Unit Price{" "}
            <span className=" font-semibold text-amazone_blue">
              {" "}
              <FormatedPrice amount={item.price} />
            </span>
          </p>
          <div className=" flex items-center gap-6">
            <div className=" flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quentity: 1,
                    })
                  )
                }
                className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer divide-purple-300"
              >
                <LuPlus />
              </span>
              <span>{item.quentity} </span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      image: item.image,
                      description: item.description,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quentity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer divide-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className=" flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className=" mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className=" text-lg font-semibold text-amazone_blue">
          <FormatedPrice amount={item.price * item.quentity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
