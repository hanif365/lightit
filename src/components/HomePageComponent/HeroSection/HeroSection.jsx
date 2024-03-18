"use client";

import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="/hero_img.png"
          alt="Hero Image"
          width={2000}
          height={2000}
          className="w-full h-[90vh]  lg:h-[140vh] 2xl:h-[90vh]"
        />
        <div className="absolute px-5 2xl:px-36 lg:w-1/2 2xl:w-3/4 space-y-3 top-0 left-0 lg:left-16 right-0 bottom-0 lg:bottom-40 2xl:bottom-0 flex flex-col justify-center z-[1] text-white">
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold">
            Custom Software
          </h1>
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold">
            Development Company
          </h1>
          <p className="text-lg lg:text-2xl 2xl:text-3xl font-bold py-5 tracking-wide 2xl:w-3/4">
            Reliable technical partner for more than 500 companies since 2006
          </p>
          <div>
            <Link
              to="upcomingEvents"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="px-12 py-3 md:mt-3 text-lg font-bold tracking-wider overflow-hidden  bg-red-400 hover:bg-red-500 rounded cursor-pointer delay-100 duration-500 ease-in-out"
              type="button"
            >
              Let's talk
            </Link>
          </div>
        </div>
        <div className=" top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-black-300 via-black-500 to-black-800 opacity-60"></div>
      </div>
    </div>
  );
};

export default HeroSection;
