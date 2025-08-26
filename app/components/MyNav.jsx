"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import MyCart from "./MyCart";
import AyutramartProduct from "../AyutramartData";
import { useSelector } from "react-redux";
import Image from "next/image";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";

export default function MyNav() {
  const [sideBar, setSideBar] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const [productSearch, setProductSearch] = useState("");



  const [cart, setCart] = useState(false);

  const MobileLinks = [
    {
      "title": "Home",
      "link": "/"
    },
    {
      "title": "About us",
      "link": "/about"
    },
    {
      "title": "Blogs",
      "link": "/blogs"
    },

    {
      "title": "WishList",
      "link": "/wishlist"
    },
    {
      "title": "Products",
      "link": "/all-products"
    },

    {
      "title": "Contact us",
      "link": "/contact-us"
    },

  ]

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);


  const categories = [
    {
      title: "Shop by Metals",
      img: "/img/copper-wire.png",
      submenu: [
        { name: "All", link: "/all-products" },
        { name: "Brass", link: "/category/brass" },
        { name: "Copper", link: "/category/copper" },
        { name: "Kansa", link: "/category/kansa" },
      ],
    },
 
  ];
  const [activeIndex, setActiveIndex] = useState(null);





  const SideBarComp = () => {
    return (
      <div
        className={`  ${sideBar ? "translate-x-0" : "-translate-x-full"
          } duration-400 transition-transform fixed bg-black/40 inset-0 z-[9999] flex  xl:hidden justify-start  `}
      >
        <div className="w-full md:w-[50%] bg-white h-full p-6">
          <div className="flex justify-between">
            <Link href="/" className="cursor-pointer">
             <img
                src="/img/logo.webp"
                alt="Indian Brass Utensils Logo"
                className="w-28 lg:w-48"
              /> 

              
            </Link>
            <button onClick={() => setSideBar(false)} className="text-black">
              <RxCross2 />
            </button>
          </div>
          <div>
            <ul className="flex flex-col gap-y-3 mt-4 ">
              {MobileLinks.map((elm, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  <Link href={elm.link} onClick={() => setSideBar(false)}>{elm.title}</Link>
                </li>
              ))}



              <li className="border-b border-gray-300 py-2">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-x-1 text-sm"
                >
                  <span>English</span>
                  <IoIosArrowDown />
                </button>
                {isLanguageOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>Spanish</li>
                    <li>French</li>
                    <li>German</li>
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-300 py-2">
                <button
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center gap-x-1 text-sm"
                >
                  <span>USD</span>
                  <IoIosArrowDown />
                </button>
                {isCurrencyOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>EUR</li>
                    <li>GBP</li>
                    <li>JPY</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const searchProductFilter = AyutramartProduct.filter((item) =>
    item.heading.toLowerCase().includes(productSearch.toLowerCase())
  );

  const cartItems = useSelector((state) => state.cart.cartItem)

  const cartLengthTotal = cartItems.reduce((accum, curntVal) => accum + curntVal.qnty, 0)


  return (
    <>
      <div className="px-2 py-2 md:px-12 xl:px-32 lg:py-2 flex gap-3 justify-between items-center sticky bg-white z-[99] top-0">
        <Link href="/">
          <img
            src="/img/logo.webp"
            alt="Indian Brass Utensils Logo"
            className="w-32 md:w-28 lg:w-34 cursor-pointer"
          /> 

        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsProductDropdownOpen(true)}

        >
          <div className="hidden lg:flex items-center gap-[10px] h-[50px] rounded-[5px] bg-gray-100 px-[16px] py-[15px] cursor-pointer font-semibold text-[#2C3C28]">
            <Image
              className="parent h-2 w-auto"
              src="/img/bar-1.svg"
              alt="icons"
              width={20}
              height={20}
            />
            <Link href={"/product?name=all"} className="text-base">Products</Link>
          </div>

         
        </div>









        <div className="relative hidden xl:block md:w-[46%] lg:w-[40%] xl:w-[40%] py-4 bg-[#F3F4F7] rounded-lg">
          <input
            type="text"
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
            placeholder="Search for items..."
            className="w-full border-0 px-4  rounded-2xl outline-none bg-transparent placeholder:text-gray-400"
          />
          <IoSearch className="absolute right-5 top-[22px] text-gray-600" />

          {productSearch && searchProductFilter.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-md shadow-lg max-h-[220px] overflow-y-auto z-50">
              <ul className="divide-y divide-gray-200">
                {searchProductFilter.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    <Link href={`/product/${item.title
                      .toLowerCase()
                      .replace(/,/g, "")
                      .split(" ")
                      .join("-")}`} onClick={() => productSearch("")}>  {item.title || item.heading} </Link>

                  </li>
                ))}
              </ul>
            </div>
          )}

          {productSearch && searchProductFilter.length === 0 && (
            <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-md shadow-lg p-4 text-gray-500 text-sm z-50">
              No products found.
            </div>
          )}
        </div>



        <ul className="hidden lg:flex items-center gap-x-6 text-base">



          <li>
            <Link href="/blogs" className="text-gray-700 hover:text-[#23955c]">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-[#23955c]"
            >
              Contact us
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-x-2 lg:gap-x-6">
          <li className="hidden md:block">
            <Link href={"/signup"} className="w-8 h-8 flex justify-center items-center rounded-full border border-gray-400 hover:bg-[#F3F4F7] cursor-pointer">
              <RiUserLine className="text-gray-600" />
            </Link>
          </li>

          <li className="">
            <button
              onClick={() => setCart(true)}
              className="w-8 h-8 relative flex justify-center items-center rounded-full  bg-[#b2e18c30] border-[#62371f]  cursor-pointer"
            >
              <BsCartPlus className="text-[#62371f]" />
              <span className="bg-[#62371f] absolute -right-1 -top-1 rounded-full w-4 h-4 flex items-center justify-center text-white">
                {cartLengthTotal}
              </span>
            </button>
          </li>
          <li className="xl:hidden">
            <button onClick={() => setSideBar(!sideBar)} className="text-xl">
              <HiMenu />
            </button>
          </li>
        </ul>
      </div>

      <SideBarComp />

      <MyCart cart={cart} setCart={setCart} />

      {/* {searchtoggle &&  <ItemSearch setSearchToogle={setSearchToogle}/> }  */}
    </>
  );
}
