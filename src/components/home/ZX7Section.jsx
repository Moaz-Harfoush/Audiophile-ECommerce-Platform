import { IMAGES } from "../../assets";

import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";

const ZX7Section = () => (
  <div className="relative rounded-lg overflow-hidden h-80 flex items-center px-6 lg:px-24 bg-gray-light">
    <ProductImage
      desktop={IMAGES.home.zx7.desktop}
      tablet={IMAGES.home.zx7.tablet}
      mobile={IMAGES.home.zx7.mobile}
      alt="ZX7"
      className="absolute inset-0 z-0"
    />
    <div className="relative z-10">
      <h2 className="text-black-pure text-3xl font-bold mb-8 uppercase tracking-widest">
        ZX7 Speaker
      </h2>
      <Button variant="ghost" url="/speakers/zx7-speaker" />
    </div>
  </div>
);

export default ZX7Section;
