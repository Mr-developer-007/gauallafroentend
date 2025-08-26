"use client";
import React from "react";
import CategoriesGrid from "../components/Shop";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/commonBanner/butter.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-2xl md:text-5xl lg:text-6xl uppercase">
              Categories
            </h1>

            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="font-medium">Categories </span>
            </div>
          </div>
        </div>
      </div>

      <CategoriesGrid />
    </>
  );
};

export default page;
