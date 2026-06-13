"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Banner01 from "@/assest/img/Artboard2.png";
import Banner02 from "@/assest/img/Artboard 3.png";
import Banner03 from "@/assest/img/Artboard 7.png";
import Banner04 from "@/assest/img/Artboard 9.png";

export const BannerCarousel = ()=>{
	const banners = [
		Banner01,Banner02,Banner03, Banner04
	];
	return(
  <div className="p-2">
    <Swiper
      autoplay={{ delay: 3000 }}
      direction="horizontal"
      loop
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
		>
      {banners.map((src, i) => (
        <SwiperSlide key={i}>
          <Image
            alt="banner"
            src={src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
	);
};