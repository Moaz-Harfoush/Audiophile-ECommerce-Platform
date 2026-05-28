import React from "react";

import ProductImage from "../ui/ProductImage";
import New from "../shared/New";
import GoBack from "../ui/GoBack";

import AddToCartSection from "./AddToCartSection";

const ProductHero = ({ product }) => {
  return (
    <section>
      <div className="container mt-40">
        {/* Reusable back navigation action control */}
        <GoBack />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center">
          {/* Main detailed product presentation asset */}
          <ProductImage
            desktop={product.categoryImage.desktop}
            tablet={product.categoryImage.tablet}
            mobile={product.categoryImage.mobile}
            alt={product.name}
            className="w-full h-full object-contain"
            isPriority={true} // Boosts image loading priority on individual item screens
          />

          {/* Product pricing and description block text */}
          <div className="flex flex-col">
            {product.new && <New />}

            <h1 className="text-4xl md:text-[40px] leading-tight font-bold tracking-wider mb-8 uppercase text-center md:text-left">
              {product.name}
            </h1>

            <p className="text-text-body leading-relaxed mb-10 max-w-md mx-auto md:mx-0 text-center md:text-left">
              {product.description}
            </p>

            <span className="text-lg font-bold tracking-widest mb-12 text-center md:text-left">
              $ {product.price.toLocaleString()}
            </span>

            {/* Embedded actionable counter addition interface */}
            <AddToCartSection product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
