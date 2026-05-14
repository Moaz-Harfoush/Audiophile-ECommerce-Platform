import Button from "../ui/Button";
import ProductImage from "../ui/ProductImage";

const ProductSuggestions = ({ product }) => {
  return (
    <section>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-10 md:mb-16 tracking-wider">
          You may also like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3 lg:gap-8">
          {product.others.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-light rounded-lg w-full mb-8 flex justify-center items-center md:p-10 p-5  md:h-79.5">
                <ProductImage
                  desktop={item.image.desktop}
                  tablet={item.image.tablet}
                  mobile={item.image.mobile}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold uppercase mb-8 tracking-widest">
                {item.name}
              </h3>

              <Button url={`/${item.slug}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuggestions;
