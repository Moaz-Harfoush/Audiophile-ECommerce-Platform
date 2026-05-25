import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";
import GoBack from "../ui/GoBack";
import Toast from "../ui/Toast";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";
import AddToCartSection from "./AddToCartSection";

const ProductHero = ({ product }) => {
  return (
    <section className="mt-40">
      <div className="container">
        <GoBack />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 items-center">
          <ProductImage
            desktop={product.categoryImage.desktop}
            tablet={product.categoryImage.tablet}
            mobile={product.categoryImage.mobile}
            alt={product.name}
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

            <AddToCartSection product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
