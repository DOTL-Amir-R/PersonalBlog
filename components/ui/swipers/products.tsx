"use client";

import { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button, ProductsCards } from "@/components/ui";

export const ProductsSwiper = ({products}: {products:{
		badge?: string;
		id: number;
		image: StaticImageData;
		price: number;
		title: string;
}[]}) => {
  return (
    <section  className="rounded-xl border border-neutral-200 bg-white ">
      <div className="title-button-container p-3 flex items-start justify-between">
        <div className="flex flex-col items-start">
          <h2 className="title font-bold text-primary">
            غذا و نوشیدنی
          </h2>
          <span className="red-line mt-2 h-0.75 w-4/5 rounded-full bg-rose-600" />
        </div>
        <Button
          className="more-button"
          size="link"
          variant="linkSecondry"
          >
          مشاهده همه
        </Button>
      </div>
      <div className="products-container p-3">
        <Swiper
          className="products-swiper "
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          >
          {products.map((product) => (
            <SwiperSlide  key={product.id}>
              <div >
                <ProductsCards
                  badge={product.badge}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  />
              </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
