import React from "react";

import { IMAGES } from "../../assets";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";

const ZX9Section = () => (
  <section>
    <div className="bg-primary rounded-lg overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-24 py-16 lg:py-0 h-auto lg:h-140 relative">
      {/* Background circles effect (Decorative Asset) */}
      <div className="absolute left-1/2 lg:left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/20 rounded-full pointer-events-none" />

      {/* Product Image aligned to the bottom on large screens */}

      <div className="z-10 w-40 md:w-48 lg:w-102.5 lg:self-end lg:-mb-4">
        <ProductImage
          desktop={IMAGES.home.zx9.desktop}
          tablet={IMAGES.home.zx9.tablet}
          mobile={IMAGES.home.zx9.mobile}
          alt="ZX9"
          className="object-contain"
        />
      </div>

      {/* Call to Action Information Block */}
      <div className="z-10 text-center lg:text-left mt-10 lg:mt-0 max-w-87.5">
        <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
          ZX9 <br /> SPEAKER
        </h2>
        <p className="text-white mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variant="dark-solid" url="/speakers/zx9-speaker" />
      </div>
    </div>
  </section>
);

export default ZX9Section;
