"use client";

import Image, { StaticImageData } from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface CategoryItem {
  id: number;
  image: StaticImageData;
  title: string;
}

export const CategoriesSwiper = ({products}:{products : CategoryItem[]}) => {
  return (
    <div className="py-3">
      <Swiper
        slidesPerView='auto'
        spaceBetween={12}
      >
        {products.map((item) => (
          <SwiperSlide className="!w-auto overflow-hidden"  key={item.id}>
            <div className="icon-desc-container">
              <Image
                alt={item.title}
                className="icon bg-primary-foreground rounded-full"
                height={75}
                src={item.image}
                width={75}
                  />
              <p className="description py-2 px-1 text-label font-medium text-center whitespace-nowrap">
                {item.title}
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};
