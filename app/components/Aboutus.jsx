"use client";
import React from "react";
import { FaLeaf, FaFlask, FaRecycle, FaSeedling } from "react-icons/fa";
import OtherBanner from "./OtherBanner";

const features = [
  {
    icon: <FaLeaf size={28} className="text-green-500" />,
    title: "Certified A2 Milk",
    description:
      "This milk is certified A2 and is sourced exclusively from indigenous Indian cow breeds raised with ethical care.",
  },
  {
    icon: <FaFlask size={28} className="text-green-500" />,
    title: "Zero Chemicals, No Adulteration",
    description:
      "We strictly avoid synthetic antibiotics, hormones, and preservatives to give you only pure and natural nutrition.",
  },
  {
    icon: <FaRecycle size={28} className="text-green-500" />,
    title: "Sustainable & Ethical Farming",
    description:
      "Cow dung and urine naturally enrich the soil, ensuring chemical-free, fertile land where cows thrive.",
  },
  {
    icon: <FaSeedling size={28} className="text-green-500" />,
    title: "Tradition Meets Purity",
    description:
      "We blend time-honoured practices with modern cleanliness to deliver milk and ghee filled with natural goodness.",
  },
];

const AboutSection = ({need=true}) => {
  return (<>
   {need &&   <OtherBanner text="About Us" /> }
 
    <section className="py-16 px-5 md:px-16 xl:px-32 bg-white">

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/3 relative flex justify-center">
          {/* Main Image */}
          <div className="relative w-full overflow-hidden rounded-2xl group transition-all duration-500 lg:w-4/5">
            <img
              src="/img1.jpg"
              alt="Gaualla Dairy"
              className="rounded-2xl h-[400px] object-fill w-full transform group-hover:scale-105 duration-500"
            />
          </div>

          {/* Floating Image Box */}
          {/* <div className="absolute bottom-[-30px] right-6 sm:right-10 w-44 sm:w-48 rounded-xl overflow-hidden border-4 border-white animate-fade-up shadow-lg">
            <img
              src="/img/circleimg.webp"
              alt="Gaualla Farm"
              width={300}
              height={200}
              className="rounded-xl h-[200px] w-full object-cover"
            />
          </div> */}
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience Dairy in Its Purest Form
          </h2>
          <div className="text-gray-600 mb-8">
            Gaualla sources A2 desi cow milk, which is fresh and comes from
            ethically raised Indian cows. We focus on purity, nutrition, and
            tradition while strictly avoiding chemicals, hormones, and
            preservatives.
            <br />
            <br />
            <strong>What We Stand For:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                This milk is certified A2 and is sourced exclusively from indigenous Indian cow breeds

              </li>
              <li>Animals are taken care of with special attention to their ethical care.</li>
              <li>Zero synthetic antibiotics and no adulteration. </li>
              <li>Blend of traditional practices and modern cleanliness.</li>
              <li>Fresh milk delivered directly from farm to doorstep.</li>
            </ul>
            <br />
            <strong>Rooted in Tradition, Powered by Nature:</strong> We see our farm as a foundation that promises to follow ethical and sustainable methods for dairy. We naturally enhance the soil using desi cow dung and urine, which means that no chemicals are used in the milk that is delivered to you. We promise that when you buy fresh cow milk online–you can be sure that it is clean and comes from fertile land where cows thrive.
            <br />
            <br />
            <strong>The Gold Standard for Ghee:</strong> Our traditional bilona cow ghee comes from A2 Desi Cow milk. The best part of Gaualla’s bilona A2 ghee is that it brings back the traditional flavors and aroma that your kitchen deserves.
            <br />
            <br />
            <strong>Freshness That Arrives On Time:</strong> Our services have a quick turnaround without compromising quality. When you buy standardized milk online, it reaches you with the ultimate freshness; you get it delivered to your home within just 3 days of milking. 
            <br />
            <br />
            {need && <>  
            <strong>Heritage of Purity – 40 Years of Trusted Dairy Excellence:</strong> Since 1975 – A Legacy Rooted in Purity
            <br />
            <strong>Milestones That Make Us Proud:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>6,200+ Happy Customers</li>
              <li>400+ Awards & Recognitions</li>
              <li>500 Dedicated Team Members & Volunteers</li>
              <li>400 Healthy Desi Cows</li>
            </ul>
            </> }
          </div>

        
        </div>
      </div>
    </section>
     </>
  );
};

export default AboutSection;
