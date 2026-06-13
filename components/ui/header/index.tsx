"use client";
import { CartIcon, FoodUtensilsIcon, HeartIcon, HouseIcon, LoginIcon, PhoneIcon } from "@/components/svg";
import {
	Button,
	Field,
	Input
} from "@/components/ui";
// const menuData = [
//   {
//     title: [
//       { href: "/home", id: 1, item: "غلات صبحانه" },
//       { href: "/jam", id: 2, item: "مربا" },
//       { href: "/honey", id: 3, item: "عسل" },
//       { href: "/peanut-butter", id: 4, item: "کره بادام زمینی" },
//     ],
//   },
//   {
//     title: [
//       { href: "/eggs", id: 5, item: "تخم مرغ" },
//       { href: "/chicken", id: 6, item: "مرغ" },
//       { href: "/meat", id: 7, item: "گوشت قرمز" },
//       { href: "/fish", id: 8, item: "ماهی و میگو" },
//     ],
//   },
//   {
//    title : [
//       { href: "/milk", id: 9, item: "شیر" },
//       { href: "/yogurt", id: 10, item: "ماست" },
//       { href: "/cheese", id: 11, item: "پنیر" },
//       { href: "/ice-cream", id: 12, item: "بستنی" },
//     ],
//   },
//   {
//     title: [
//       { href: "/juice", id: 13, item: "آبمیوه" },
//       { href: "/soda", id: 14, item: "نوشابه" },
//       { href: "/tea", id: 15, item: "چای و دمنوش" },
//     ],
//   },
// ];

export const Header = () => {

	return(
  <div className="w-full shadow-2xs z-50">
    <div className="header-container flex justify-around items-center py-3 px-4 m-auto">
      <div className="login-contactus-container ">
        <div className="login-basket-container flex items-center gap-2">
          <div className="CartIcon m-3">
            <CartIcon/>
          </div>
          <div className="LoginIcon m-3">
            <LoginIcon/>			
          </div>
        </div>
        <Button className="contactus-button" onClick={()=>console.log("dude")} size="md" variant="outline">
          contactus-button<PhoneIcon/>
        </Button>
      </div>
      <div className="menu-search-container">
        <div className="search-logo-container flex items-center gap-4 justify-end">
          <Field className="w-11/12">
            <Input
              dir="ltr"
              id="input-field-search"
              placeholder="search"
              type="text"
      		/>
          </Field>
          <div className="pr-3">
            <CartIcon height={42} width={42}/>
          </div>
        </div>
        <div className="menu-container flex py-1.5">
          {/* <Button className="food-menu" onClick={()=>console.log("dude")} size="md" variant="ghost">
            food-menu<DrinksIcon height={18} width={18}/>
          </Button> */}
          <Button>TEST</Button>
          <Button className="health-menu" onClick={()=>console.log("dude")} size="md" variant="ghost">
            health-menu<HeartIcon height={18} width={18}/>
          </Button>
          <Button className="furniture-menu" onClick={()=>console.log("dude")} size="md" variant="ghost">
            furniture-menu<HouseIcon height={18} width={18}/>
          </Button>
          <Button className="fast-food-menu" onClick={()=>console.log("dude")} size="md" variant="ghost">
            fast-food-menu<FoodUtensilsIcon height={18} width={18}/>
          </Button>

        </div>
      </div>
    </div>
  </div>
	);
};