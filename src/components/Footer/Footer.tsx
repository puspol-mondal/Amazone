import Image from "next/image";
import logo from "@/images/logo.png";

const Footer = () => {
  return (
    <div className=" w-full h-20 bg-amazone_blue text-gray-300 flex items-center justify-center gap-4">
      <Image className=" w-24 object-cover" src={logo} alt="logo" />
      <p className="text-sm ">
        All right reserved{" "}
        <a
          className=" hover: text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="#"
          target=" _blank"
        >
          @puspolmondal.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
