

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
// import SuccessStoryAbove from "./SuccessStoryAbove";

export default function SuccessStory() {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  const testmonials = [
    {
      heading: "A touch of tradition in every meal!",
      rating: 5,
      desc: "I grew up watching my grandmother use brass utensils, and now thanks to Indian Brass Utensils, I’ve brought that same warmth into my own kitchen. The quality is unmatched and the craftsmanship is truly soulful.",
      img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      name: "Priya Mehta",
      position: "Nutritionist",
    },
    {
      heading: "Not just utensils, but heritage!",
      rating: 5,
      desc: "Each piece I ordered feels like a work of art. It’s heartening to know these are made by traditional artisans—I'm proud to support something so meaningful.",
      img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      name: "Priya Mehta",
      position: "Nutritionist",
    },
    {
      heading: "Functional, beautiful, and sustainable.",
      rating: 5,
      desc: "These utensils are durable, easy to cook with, and look stunning on the table. I’ve even noticed a change in the taste and warmth of our meals.",
      img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      name: "Anjali Sharma",
      position: "Dairy Farm Manager",
    },
    {
      heading: "Perfect for gifting!",
      rating: 4,
      desc: "I gifted a Kansa dinner set to my sister on her wedding, and she was overjoyed. It’s rare to find gifts that are so personal, healthy, and elegant at the same time.",
      img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      name: "Anjali Sharma",
      position: "Dairy Farm Manager",
    },
    {
      heading: "A conscious choice I’ll never regret.",
      rating: 5,
      desc: "Switching from non-stick to pure brass and copper has been a game-changer. Not only are these better for my family’s health, but they also reflect our Indian roots beautifully.",
      img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      name: "Emily Davis",
      position: "Pastry Chef",
    },

  ];

  const [showDec, setShowDec] = useState(110);
  const [expan, setExpand] = useState(null);

  const setExpnadHandler = (id) => {
    setExpand((prev) => (prev == id ? null : id));
  };

  return (
    <div className="relative  mt-5 lg:mt-10 overflow-hidden  py-5 md:py-10 lg:py-16  bg-[url('https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/test-bg.png')]  ">

      <img
        src="https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/bg-shape3.png"
        alt="cleint-review "
        className="absolute left-0 top-0"
      />

      <div className="relative z-10  bg-cover  bg-center space-y-10 lg:space-y-16 text-black  ">
        <div className="px-5 md:px-16 xl:px-32 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-5 justify-center items-center">
          {/* Left Section */}
          <div className="col-span-1 space-y-5">

            <h3 className="text-xl mt-2 md:text-3xl xl:text-5xl font-bold">
              {/* What people say  <br /> about us */}
              What Our  Clients Say
            </h3>
            <p className="text-sm md:text-base text-justify">
              Real feedback from real users who have experienced the magic of traditional brass cooking in their modern kitchens, celebrating authentic flavors, healthier meals, and timeless craftsmanship.
            </p>
            <div className="relative space-x-2 flex justify-start">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowForward className="group-hover:translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 2, spaceBetween: 25 },
              }}
            >
              {testmonials.map((member, index) => (
                <SwiperSlide key={index} className="pb-10 md:pb-0">
                  <div className="bg-white shadow-xl text-black h-max lg:h-[280px] border border-gray-200 rounded-xl p-6 transition-all  hover:border-gray-300">
                    <h5 className="font-bold text-xl md:text-2xl text-gray-800">
                      {member.heading}
                    </h5>

                    <div className="flex items-center gap-x-2 text-yellow-500 mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{member.desc}</p>

                    <hr className="border-gray-200 mb-4" />

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-x-3">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h6 className="font-semibold text-gray-700">
                            {member.name}
                          </h6>
                          <p className="text-sm text-gray-500">
                            {member.position}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {/* Any additional content can go here */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
