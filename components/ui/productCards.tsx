"use client";

import { Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ProductsCardsProps {
  badge?: string;
  className?: string;
  image: StaticImageData | string;
  price: number;
  title: string;
}

export const ProductsCards = ({
  badge,
  className,
  image,
  price,
  title,
}: ProductsCardsProps) => {
  return (
    <div
      className={cn(
        "container-product-card mx-1 px-1 w-40 h-56  flex justify-between  flex-col items-start rounded-xl bg-white transition-colors duration-200 hover:bg-neutral-100",
        className
      )}
    >
      {badge && (
        <div className="badge text-badge top-2 absolute flex self-start rounded-full bg-emerald-500 px-2 py-1 text-white shadow-sm">
          {badge}
        </div>
      )}
      <Image
        alt={title}
        className="p-1 mx-4 transition-transform duration-200 group-hover:scale-105"
        height={120}
        src={image}
        width={120}
        />
      <Button className="add-button top-22 absolute flex self-start " size={"icon-lg"}>
        <Plus />
      </Button>
      <div className="title h-14 px-4 pt-2 text-label font-body">
        {title}
      </div>
      <div className="price-tag-container items-center px-3 h-9 w-full py-1.5 text-label flex font-bold">
        <div className="price ml-1">
          {new Intl.NumberFormat("fa-IR").format(price)}
        </div>
        <span className="text-label">تومان</span>
      </div>
    </div>
  );
};
