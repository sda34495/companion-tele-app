'use client'
import dynamic from "next/dynamic";
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import carousalData from '../data/carouselData';

const Carousal = () => {
  return (
    <div className="w-full">
      <Swiper autoplay={{ delay: 3000 }} loop={true} slidesPerView={1}>
        {carousalData.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="w-full h-[250px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
