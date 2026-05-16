import { NavLink } from "react-router-dom";

import { IMAGES } from "../../assets";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";
import New from "../shared/New";

const Hero = () => {
  return (
    <section className="bg-black-light w-full min-h-150 flex items-center">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pb-20 lg:pb-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <New positionOfText="lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-text-white mb-6 leading-tight">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-text-muted text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              variant="primary"
              url="/headphones/xx99-mark-two-headphones"
            />
          </div>

          <div className="w-full lg:w-1/2 flex">
            <ProductImage
              desktop={IMAGES.home.hero.tablet}
              tablet={IMAGES.home.hero.tablet}
              mobile={IMAGES.home.hero.mobile}
              alt="XX99 Mark II Headphones"
              className="w-full h-auto object-contain lg:scale-125"
              isPriority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
