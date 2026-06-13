
import CategoryIcon01 from "@/assest/img/categoryImg01.png";
import CategoryIcon02 from "@/assest/img/categoryImg02.png";
import CategoryIcon03 from "@/assest/img/categoryImg03.png";
import EventBanner02 from "@/assest/img/eventBanner02.webp";
import EventBanner03 from "@/assest/img/eventBanner03.webp";
import EventBanner04 from "@/assest/img/eventBanner04.webp";
import { BannerCarousel, CategoriesSwiper, EventBanner, EventSwiper, ProductsSwiper } from "@/components/ui";

const banners = [
  {
    alt: "اصالت طعم",
    href: "/category/meat",
    id: "2",
    image: EventBanner02,
  },
  {
    alt: "طعم سلامتی",
    href: "/category/dairy",
    id: "3",
    image: EventBanner03,
  },
  {
    alt: "برکت سفره",
    href: "/category/bakery",
    id: "4",
    image: EventBanner04,
  },
];
const banners02 = [
 {
    alt: "اصالت طعم",
    href: "/category/meat",
    id: "4",
    image: EventBanner04,
  },  {
    alt: "اصالت طعم",
    href: "/category/meat",
    id: "5",
    image: EventBanner04,
  },  {
    alt: "اصالت طعم",
    href: "/category/meat",
    id: "7",
    image: EventBanner04,
  },
  {
    alt: "طعم سلامتی",
    href: "/category/dairy",
    id: "3",
    image: EventBanner04,
  },

];
const categories = [
	{ id: 1, image: CategoryIcon01, title: "صبح" },
	{ id: 2, image: CategoryIcon02, title: "پروتئین و تخم مرغ" },
	{ id: 3, image: CategoryIcon03, title: "خشکبار و شیرینی" },
	{ id: 4, image: CategoryIcon01, title: "کنسرو و غذای آماده" },
	{ id: 5, image: CategoryIcon02, title: "خواربار و نان" },
	{ id: 6, image: CategoryIcon03, title: "چاشنی و افزودنی" },
	{ id: 7, image: CategoryIcon03, title: "لبنیات و بستنی" },
	{ id: 8, image: CategoryIcon02, title: "نوشیدنی" },
	{ id: 9, image: CategoryIcon02, title: "تنقلات" },  
	{ id: 10, image: CategoryIcon01, title: "تنقلات" },
	{ id: 11, image: CategoryIcon01, title: "نوشیدنی" },
];
const products = [
  {
    id: 1,
    image: CategoryIcon02,
    price: 25000,
    title: "آب معدنی آکوافینا",
  },
  {
    badge: "وزن دار",
    id: 2,
    image: CategoryIcon02,
    price: 970000,
    title: "فیله مرغ سالیذ",
  },
  {
    id: 3,
    image: CategoryIcon02,
    price: 76500,
    title: "شکر 900 گرم پردیس",
  },
  {
    id: 4,
    image: CategoryIcon02,
    price: 285000,
    title: "شکلات مدل گالاردو 83 درصد وزن 80 گرم فرمند",
  },
  {
    id: 5,
    image: CategoryIcon02,
    price: 467000,
    title: "تخم مرغ طبقـی بسته 20 عددی پارسینک",
  },
	  {
    id: 6,
    image: CategoryIcon02,
    price: 25000,
    title: "آب معدنی آکوافینا",
  },
	  {
    id: 7,
    image: CategoryIcon02,
    price: 25000,
    title: "آب معدنی آکوافینا",
  },
];
export default function Home() {
  return (
    <div >
      <BannerCarousel/>
      <div className="container-main w-full flex justify-center p-2">
        <div className="container-main w-4xl">
          <CategoriesSwiper products={categories}/>
          <ProductsSwiper products={products}/>
          <EventBanner banners={banners}/>
          <EventSwiper products={products}/>
          <ProductsSwiper products={products}/>
          <EventBanner banners={banners02}/>
          <ProductsSwiper products={products}/>
        </div>

      </div>
    </div>
  );
}
