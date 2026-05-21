import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";
import DecrementAndIncrement from "../cart/DecrementAndIncrement";

const ProductHero = ({ product }) => {
  const navigate = useNavigate();

  // const handleIncrement = () =>
  //   setQuantity((prev) => (prev >= 20 ? prev : prev + 1));
  // const handleDecrement = () =>
  //   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="mt-40">
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="mb-14 mx-auto md:mx-0 text-text-body hover:underline hover:text-primary standard-smooth block"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center">
          <ProductImage
            desktop={product.categoryImage.desktop}
            tablet={product.categoryImage.tablet}
            mobile={product.categoryImage.mobile}
            alt={product.shortName}
            className="w-full h-full object-contain"
            isPriority={true}
          />

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

            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap justify-center md:justify-start">
              <DecrementAndIncrement />

              <Button text="Add To Cart" onClick={() => console.log("add")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
