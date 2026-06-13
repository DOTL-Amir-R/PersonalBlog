"use client";

import { StaticImageData } from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";

import { ProductsCards } from "../productCards";

export const EventSwiper = ({products}: {products:{
    badge?: string;
    id: number;
    image: StaticImageData;
    price: number;
    title: string;
}[]}) => {
  return (
    <section className="my-3  flex flex-row-reverse justify-center rounded-2xl bg-linear-to-l from-red-700 via-red-600 to-rose-400 p-4">
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
          >
        {products.map((product) => (
          <SwiperSlide className="!w-auto"  key={product.id}>
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
      <div className="title-button-container px-12 flex flex-col items-center justify-center">
        <div className="title text-label mb-4 text-secondary font-bold">پرفروش‌ها</div>
        <Button
          className="button-link "
          size={"link"}
          variant={"linkPrimary"}
					>
          مشاهده همه
        </Button>
      </div>
    </section>
  );
};
