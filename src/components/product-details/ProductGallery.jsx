import React from "react";

import ProductImage from "../ui/ProductImage";

const ProductGallery = ({ product }) => {
  return (
    <section>
      {/* Grid container mirroring the uneven 3-image mosaic design */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left column stacked duo images */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="rounded-lg overflow-hidden h-45 md:h-57.5">
            <ProductImage
              className="w-full h-full object-cover"
              alt="Gallery item 1"
              desktop={product.gallery.first.desktop}
              tablet={product.gallery.first.tablet}
              mobile={product.gallery.first.mobile}
            />
          </div>

          <div className="rounded-lg overflow-hidden h-45 md:h-57.5">
            <ProductImage
              className="w-full h-full object-cover"
              alt="Gallery item 2"
              desktop={product.gallery.second.desktop}
              tablet={product.gallery.second.tablet}
              mobile={product.gallery.second.mobile}
            />
          </div>
        </div>

        {/* Right column full height single featured image */}
        <div className="rounded-lg overflow-hidden h-95 md:h-123">
          <ProductImage
            className="w-full h-full object-cover"
            alt="Gallery item 3"
            desktop={product.gallery.third.desktop}
            tablet={product.gallery.third.tablet}
            mobile={product.gallery.third.mobile}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
