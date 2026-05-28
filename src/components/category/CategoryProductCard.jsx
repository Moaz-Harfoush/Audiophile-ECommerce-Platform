import React from "react";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";

const CategoryProductCard = ({ product, index }) => {
  /* Check if index is even to alternate layout direction (Left vs Right) */
  const isEven = index % 2 === 0;
  return (
    <section>
      <div
        className={`container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32 ${isEven ? "" : "lg:flex-row-reverse"}`}
      >
        {/* Product Image Container */}
        <div className="w-full lg:w-3/5 bg-gray-light rounded-lg">
          <ProductImage
            desktop={product.image.desktop}
            tablet={product.image.tablet}
            mobile={product.image.mobile}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Render "New Product" badge if the condition is true */}
          {product.new && <New />}

          <h2 className="text-black text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 max-w-75 lg:max-w-none">
            {product.name}
          </h2>

          <p className="text-text-body leading-relaxed mb-8 md:mb-10 max-w-112.5 lg:max-w-none">
            {product.description}
          </p>

          <Button url={product.slug} />
        </div>
      </div>
    </section>
  );
};

export default CategoryProductCard;
