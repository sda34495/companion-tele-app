"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import carousalData from '../data/carouselData'

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Carousal() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    // swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false
  };

  return (


    <div className=" items-center justify-center w-full mx-auto max-w-6xl  mb-2">
    <Slider {...settings}>
      {carousalData.map((item: any, index: any) => (
        <div key={index} className="relative w-full h-[250px]">
          <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-fit"
        />
        </div>
      ))}
       </Slider>
       </div>

  );
}

export default Carousal;
