import { IMAGES } from "../../assets";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";

const YX1Section = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
    <div className="rounded-lg overflow-hidden h-80">
      <ProductImage
        desktop={IMAGES.home.yx1.desktop}
        tablet={IMAGES.home.yx1.tablet}
        mobile={IMAGES.home.yx1.mobile}
        alt="YX1"
      />
    </div>
    <div className="bg-gray-light rounded-lg h-80 flex flex-col justify-center px-6 lg:px-24">
      <h2 className="text-black-pure text-3xl font-bold mb-8 uppercase tracking-widest">
        YX1 Earphones
      </h2>
      <Button variant="ghost" />
    </div>
  </div>
);

export default YX1Section;
