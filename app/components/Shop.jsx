"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { baseurl, imageurl } from "./utlis/apis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const categories = [
  { name: "Kitchenware", image: "/img/myproduct.webp", link: "/" },
  { name: "Drinkware", image: "/img/cowgee.webp", link: "/" },
  { name: "Dinnerware", image: "/img/myproduct.webp", link: "/" },
  { name: "Combos", image: "/img/myproduct.webp", link: "/" },
  { name: "Gifting", image: "/img/myproduct.webp", link: "/" },
  { name: "Home Decor", image: "/img/myproduct.webp", link: "/" },
];



export default function CategoriesGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderCount, setLoaderCount] = useState(6);
const [categoryData,setCategorydata]=useState()



  const fetchcategory=async()=>{
    setIsLoading(true)
    const response= await axios.get(`${baseurl}/category`)
    const data= await response.data;
    if(data.success){
setCategorydata(data.category)
    }
        setIsLoading(false)

  }

  useEffect(() => {
   fetchcategory()  
  }, []);

  const renderLoader = () => (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
      {Array.from({ length: loaderCount }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-300 h-24 rounded-xl mb-3"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
        </div>
      ))}
    </div>
  );

  const renderGrid = (data) => (
       <div className="mt-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        // navigation={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 15 }, // sm
          768: { slidesPerView: 4, spaceBetween: 20 }, // md
          1024: { slidesPerView: 6, spaceBetween: 25 }, // lg
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/product?name=${item.name}`}
              className="block group bg-white rounded-xl p-1 hover:shadow-md transition border border-gray-200"
            >
              <div className="flex justify-center">
                <Image
                  src={`${imageurl}/${item.image}`}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h5 className="text-center mt-2 capitalize font-medium">
                {item.name}
              </h5>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className="py-12 px-5 lg:px-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl lg:text-3xl font-semibold">Crafted for all your needs!</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            From traditional kitchens to modern homes, our utensils are designed to serve every purpose with grace and durability.
          </p>
        </div>

        {/* Shop by Metals */}
     

        {/* Shop by Utility */}
        <div>
          <h3 className="font-semibold text-center text-lg mb-2">Shop by Utility</h3>
          {isLoading ? renderLoader() : renderGrid(categoryData)}
        </div>
      </div>
    </section>
  );
}
