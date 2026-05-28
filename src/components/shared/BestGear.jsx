import React from "react";

import { IMAGES } from "../../assets";

import ProductImage from "../ui/ProductImage";

const BestGear = () => {
  return (
    <section>
      <div className="container mb-40">
        {/* Responsive flex layout changing order on smaller devices via flex-col-reverse */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-32">
          {/* Informational branding text block */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest leading-tight mb-8">
              Bringing you the <br />
              <span className="text-primary">best</span> audio gear
            </h2>
            <p className="text-text-body max-w-100">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          {/* Fully responsive background product presentation wrapper */}
          <div className="w-full lg:w-2/3 h-75 md:h-87.5 lg:h-125 rounded-lg overflow-hidden">
            <ProductImage
              desktop={IMAGES.shared.bestGear.desktop}
              tablet={IMAGES.shared.bestGear.tablet}
              mobile={IMAGES.shared.bestGear.mobile}
              alt="Man wearing headphones"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestGear;
