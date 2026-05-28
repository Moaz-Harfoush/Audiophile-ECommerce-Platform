import React from "react";

import { NavLink } from "react-router-dom";

import { IMAGES } from "../../assets";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";

const Hero = () => {
  return (
    <section className="bg-black-light w-full min-h-137.5 md:min-h-160 lg:min-h-180 relative overflow-hidden flex items-center">
      {/* Background Image Wrapper (Absolute Layout) */}
      <div className="absolute inset-0 w-full h-full z-0 flex justify-center lg:justify-end items-center pointer-events-none">
        <div className="lg:w-full lg:h-full transform scale-150 md:scale-125 lg:scale-100 w-1/2 transition-transform duration-300">
          <ProductImage
            desktop={IMAGES.home.hero.desktop}
            tablet={IMAGES.home.hero.tablet}
            mobile={IMAGES.home.hero.mobile}
            alt="XX99 Mark II Headphones"
            className="w-full h-full object-cover lg:object-contain object-center lg:object-right opacity-50 md:opacity-60 lg:opacity-100"
            isPriority={true} // Priority loading for Largest Contentful Paint (LCP)
          />
        </div>
      </div>

      {/* Foreground Content Wrapper */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="container w-full pointer-events-auto">
          <div className="w-full lg:w-[50%] text-center lg:text-left px-4 sm:px-12 md:px-24 lg:px-0 mx-auto lg:mx-0">
            <New positionOfText="lg" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wider uppercase leading-tight md:leading-14.5 lg:leading-17">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-white text-[15px] font-medium mb-10 max-w-sm mx-auto lg:mx-0 leading-relaxed normal-case">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              variant="primary"
              url="/headphones/xx99-mark-two-headphones"
              text="See Product"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
