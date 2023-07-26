import logo from "@/images/logo.png";
import Image from "next/image";
import Cart from "@/images/cart.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full h-20 bg-amazone_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/**logo */}
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image
            className="w-28 object-cover mt-1"
            src={logo}
            alt="logoImage"
          />
        </Link>
        {/**Deliver */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <CiLocationOn />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/**search bar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className=" w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazone_yellow"
            type="text"
            placeholder=" Search amazone product"
          />
          <span className=" w-12 h-full bg-amazone_yellow text-black text-2xl flex justify-center items-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/**signin */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
          <p>Hello, sign in</p>
          <p className=" text-white font-bold flex items-center">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        {/**fevorite */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
          <p>Marked</p>
          <p className=" text-white font-bold">& Favorite</p>
        </div>
        {/**cart */}
        <Link
          href={"/cart"}
          className=" flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className=" w-auto object-cover h-8"
            src={Cart}
            alt="cartImg"
          />
          <p className=" text-xs text-white font-bold mt-3">Cart</p>
          <span className=" absolute text-amazone_yellow text-sm top-0 left-[20px] font-semibold">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
