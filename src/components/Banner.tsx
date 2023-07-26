import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg_1 from "@/images/slider/slider_1.jpg";
import sliderImg_2 from "@/images/slider/slider_2.jpg";
import sliderImg_3 from "@/images/slider/slider_3.jpg";
import sliderImg_4 from "@/images/slider/slider_4.jpg";
import sliderImg_5 from "@/images/slider/slider_5.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image priority src={sliderImg_1} alt="sliderImage" />
        </div>
        <div>
          <Image src={sliderImg_2} alt="sliderImage" />
        </div>
        <div>
          <Image src={sliderImg_3} alt="sliderImage" />
        </div>
        <div>
          <Image src={sliderImg_4} alt="sliderImage" />
        </div>
        <div>
          <Image src={sliderImg_5} alt="sliderImage" />
        </div>
      </Carousel>
      <div className=" w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
