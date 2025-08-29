// "use client";
import React from "react";

import HeroSection from "./components/HeroSection";
import MarqueeText from "./components/MarqueeText";
import Blogs from "./components/Blogs";
import Testmonails from "./components/Testmonails";
import Faq from "./components/Faq";
import OfferPorductValid from "./components/OfferPorductValid";
import CategoriesSlider from "./components/Shop";
import Revival from "./components/Revival";
import ProductAyurved from "./components/ProductAyurved";
import AboutSection from "./components/Aboutus";

export const metadata = {
    title: " Gaualla Purity At It's Best",
  description: "",
};

export default function page() {
  return (
    <>
      <HeroSection />
      <CategoriesSlider />
      <AboutSection  need={false}/>
      <ProductAyurved />
      <OfferPorductValid />
        <Testmonails />
      <Revival />
      <Blogs />
      <MarqueeText />
      <Faq />
    </>
  );
}
