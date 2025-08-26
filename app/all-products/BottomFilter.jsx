

"use client";

import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

import AOS from "aos";
import "aos/dist/aos.css";
import { BiCategory } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { IoColorFilterSharp, IoArrowBack } from "react-icons/io5";

const filterCategories = [
  { name: "Category", options: ["Brass (120)", "Copper (95)"] },
  { name: "Price", options: ["Under ₹500", "₹500 - ₹1000"] },
  { name: "Discounts", options: ["10% Off", "20% Off"] },
  { name: "Form", options: ["Brass (150)", "Copper (120)", "Kansa (30)"] },
  { name: "Weight", options: ["100g (85)", "250g (70)", "500g (60)"] },
  { name: "Products", options: ["Brass", "Copper"] },
  // { name: "Ideal For", options: ["Men", "Women", "Athletes"] },
  // { name: "Purpose", options: ["Energy Boost", "Immunity", "Stress Relief"] },
];


const filterOptionsData = {
  Category: [
    "Brass (120)",
    "Copper (95)",
    "Kansa (85)",
    "Drinkware (60)",
    "Tableware & Dinnerware (30)"
  ],
  Price: [
    "Under ₹500",
    "₹500 - ₹1000",
    "₹1000 - ₹2000",
    "Above ₹2000"
  ],
  Discounts: [
    "10% Off",
    "20% Off",
    "30% Off",
    "50% Off"
  ],
  Form: [
    "Capsule (150)",
    "Powder (120)",
    "Resin (30)",
    "Syrup (40)",
    "Tablet (60)"
  ],
  Weight: [
    "100g",
    "250g",
    "500g",
    "1kg"
  ],
  Ingredients: [
    "Pure Brass",
    "Ashwagandha Extract",
    "Safed Musli Blend",
    "Kesar Threads",
    "Keeda Jadi Extract"
  ],
  "Ideal For": [
    "Men",
    "Women",
    "Athletes",
    "Elderly"
  ],
  Purpose: [
    "Energy Boost",
    "Immunity",
    "Stress Relief",
    "Stamina & Strength",
    "Reproductive Health"
  ]
};




const categoriesData = [
  {
    title: "Brass",
    image: "/img/blogs/Blog1.webp"
  },
  {
    title: "Copper",
    image: "/img/blogs/Blog2.webp"
  },
  {
    title: "Kansa",
    image: "/img/blogs/Blog3.webp"
  },
  {
    title: "Kitchenware",
    image: "/img/blogs/Blog4.jpg"
  },
  {
    title: "Drinkware`",
    image: "/img/blogs/Blog5.webp"
  }
];


const Superdropdown = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const toggleDropdown = (dropdown) => {
    setShowSortDropdown(dropdown === "sort" ? !showSortDropdown : false);
    setShowFilterDropdown(dropdown === "filter" ? !showFilterDropdown : false);
    setShowCategoriesDropdown(
      dropdown === "categories" ? !showCategoriesDropdown : false
    );
  };

  return (
    <>
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-[99999999] bg-[#073439] text-[#62371f] px-5 md:px-12 py-5  flex justify-between items-center shadow-md5">
        <button
          className="flex  items-center gap-2 text-base font-medium hover:text-gray-300 transition"
          onClick={() => toggleDropdown("categories")}
        >
          <BiCategory size={22} />
          <span>Categories</span>
        </button>

        <button
          className="flex items-center gap-2 text-base font-medium hover:text-gray-300 transition"
          onClick={() => toggleDropdown("sort")}
        >
          <MdSort size={22} />
          <span>Sort</span>
        </button>

        <button
          className="flex items-center gap-2 text-base font-medium hover:text-gray-300 transition"
          onClick={() => toggleDropdown("filter")}
        >
          <IoColorFilterSharp size={22} />
          <span>Filters</span>
        </button>
      </div>

      {showSortDropdown && (
        <div className="inset-0 fixed bg-black/50  z-[9999]">
          <div
            data-aos="fade-up"
            className="lg:hidden fixed z-[10000] bottom-0 inset-x-0  shadow-md rounded-t-2xl bg-white pb-20"
          >
            <h3 className="text-center bg-gray-100 text-gray-700 font-semibold rounded-t-[20px] p-4">
              Sort Designs By
            </h3>
            <button onClick={() => toggleDropdown("sort")} className="absolute right-5 top-5 font-bold">
              <RxCross2 />

            </button>
            <ul className="mt-2 text-gray-800">
              {[
                "Latest Arrivals",
                "Best Discounts",
                "Featured Products",
                "Price: Low to High",
                "Price: High to Low",
                "Top Rated by Customers"
              ].map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-4 text-base hover:bg-gray-100 cursor-pointer opacity-90 transition-opacity duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {showCategoriesDropdown && (
        <div className=" fixed inset-0  z-[9999]  bg-black/50">
          <div
            data-aos="fade-up"
            className="lg:hidden fixed inset-x-0 bottom-0 z-[10000] shadow-md rounded-t-2xl bg-white pb-20 "
          >
            <h3 className="text-center bg-gray-100 text-gray-700 font-semibold rounded-t-[20px] p-4">
              Select Category
            </h3>

            <button onClick={() => toggleDropdown("categories")} className="absolute right-5 top-5 font-bold">
              <RxCross2 />


            </button>            <div className="grid grid-cols-2 gap-4 p-4">
              {categoriesData.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-2 shadow-md cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <p className="text-center mt-2 font-medium text-gray-700">
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showFilterDropdown && (
        <div className="fixed inset-0 bg-black/15  z-[9999]">
          <div
            data-aos="fade-in"
            className="lg:hidden fixed inset-x-0 bottom-16  bg-white flex flex-col p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center pb-4 border-b">
              {selectedCategory ? (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-600 text-xl flex items-center gap-2"
                >
                  <IoArrowBack /> Back
                </button>
              ) : (
                <h3 className="text-lg font-semibold">Filters</h3>
              )}
              <button onClick={() => setShowFilterDropdown(false)} className="absolute right-5 top-5 font-bold">
                <RxCross2 />


              </button>
            </div>

            <div className="flex-1 mt-4">
              {selectedCategory ? (
                <ul className="text-gray-800">
                  {filterOptionsData[selectedCategory]?.map((option, index) => (
                    <li
                      key={index}
                      className="py-2 border-b flex items-center justify-between cursor-pointer opacity-90 transition-opacity duration-300"
                    >
                      <span>{option}</span>
                      <input type="checkbox" className="accent-purple-600" />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="text-gray-800">
                  {filterCategories.map((category, index) => (
                    <li
                      key={index}
                      className="py-2 border-b flex justify-between items-center cursor-pointer opacity-90 transition-opacity duration-300"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-500">{category.options[0]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-between gap-2 mt-4">
              <button className="w-1/2 py-2 bg-[#0c2e3966] text-[#fff] font-medium rounded">
                Clear All
              </button>
              <button className="w-1/2 py-2 bg-[#478943] text-white font-medium rounded">
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Superdropdown;
