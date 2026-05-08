import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";

const CategoryProductCard = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section>
      <div
        className={`container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-32 ${isEven ? "" : "lg:flex-row-reverse"}`}
      >
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
          {product.new && (
            <span className="text-primary tracking-[0.5rem] text-sm mb-4 block uppercase">
              New Product
            </span>
          )}

          <h2 className="text-black-pure text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 max-w-75 lg:max-w-none">
            {product.name}
          </h2>

          <p className="text-text-body leading-relaxed mb-8 md:mb-10 max-w-112.5 lg:max-w-none">
            {product.description}
          </p>

          <Button />
        </div>
      </div>
    </section>
  );
};

export default CategoryProductCard;
