"use client";
import React, { useState, useEffect } from "react";
import { FaLeaf, FaFlask, FaRecycle, FaSeedling, FaAward, FaUsers, FaHeart } from "react-icons/fa";
import OtherBanner from "./OtherBanner";

const features = [
  {
    icon: <FaLeaf size={28} className="text-green-500" />,
    title: "Certified A2 Milk",
    description: "This milk is certified A2 and is sourced exclusively from indigenous Indian cow breeds raised with ethical care.",
  },
  {
    icon: <FaFlask size={28} className="text-green-500" />,
    title: "Zero Chemicals, No Adulteration",
    description: "We strictly avoid synthetic antibiotics, hormones, and preservatives to give you only pure and natural nutrition.",
  },
  {
    icon: <FaRecycle size={28} className="text-green-500" />,
    title: "Sustainable & Ethical Farming",
    description: "Cow dung and urine naturally enrich the soil, ensuring chemical-free, fertile land where cows thrive.",
  },
  {
    icon: <FaSeedling size={28} className="text-green-500" />,
    title: "Tradition Meets Purity",
    description: "We blend time-honoured practices with modern cleanliness to deliver milk and ghee filled with natural goodness.",
  },
];

const AboutSection = ({ need = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {need && <OtherBanner text="About Us" />}

      <section className="py-16 px-5 md:px-16 xl:px-32 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-2/5 relative flex justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl group transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/img1.jpg"
                  alt="Gaualla Dairy"
                  className="rounded-2xl h-[500px] object-cover w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4 w-48 border border-green-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-800">400+</p>
                  <p className="text-xs text-gray-600">Healthy Cows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative">
              Experience Dairy in Its Purest Form
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-green-500 rounded-full"></span>
            </h2>
            
            <div className="text-gray-700 mb-8 space-y-5">
              <p className="leading-relaxed">
                Gaualla sources A2 desi cow milk, which is fresh and comes from
                ethically raised Indian cows. We focus on purity, nutrition, and
                tradition while strictly avoiding chemicals, hormones, and
                preservatives.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  What We Stand For:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Certified A2 milk sourced exclusively from indigenous Indian cow breeds",
                    "Animals are taken care of with special attention to their ethical care",
                    "Zero synthetic antibiotics and no adulteration",
                    "Blend of traditional practices and modern cleanliness",
                    "Fresh milk delivered directly from farm to doorstep"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Rooted in Tradition, Powered by Nature:
                </h3>
                <p className="leading-relaxed">
                  We see our farm as a foundation that promises to follow ethical and sustainable methods for dairy. We naturally enhance the soil using desi cow dung and urine, which means that no chemicals are used in the milk that is delivered to you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  The Gold Standard for Ghee:
                </h3>
                <p className="leading-relaxed">
                  Our traditional bilona cow ghee comes from A2 Desi Cow milk. The best part of Gaualla's bilona A2 ghee is that it brings back the traditional flavors and aroma that your kitchen deserves.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Freshness That Arrives On Time:
                </h3>
                <p className="leading-relaxed">
                  Our services have a quick turnaround without compromising quality. When you buy standardized milk online, it reaches you with the ultimate freshness; you get it delivered to your home within just 3 days of milking.
                </p>
              </div>
              
              {need && (
                <>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Heritage of Purity – 40 Years of Trusted Dairy Excellence:
                    </h3>
                    <p className="leading-relaxed">
                      Since 1975 – A Legacy Rooted in Purity
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Milestones That Make Us Proud:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {[
                        { icon: <FaUsers className="text-2xl" />, value: "6,200+", label: "Happy Customers" },
                        { icon: <FaAward className="text-2xl" />, value: "400+", label: "Awards" },
                        { icon: <FaHeart className="text-2xl" />, value: "500", label: "Team Members" },
                       
                      ].map((stat, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                          <div className="text-green-600 flex justify-center mb-2">{stat.icon}</div>
                          <p className="font-bold text-2xl text-gray-800">{stat.value}</p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Commitment to Quality
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AboutSection;