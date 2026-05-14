const ProductInfo = ({ product }) => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row gap-20 lg:gap-32">
        <div className="lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wider md:text-left text-center">
            Features
          </h2>
          <div className="space-y-2">
            <p className="text-text-body leading-relaxed text-center md:text-left whitespace-pre-line">
              {product.features}
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col md:flex-row lg:flex-col md:gap-40 lg:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-center md:text-left tracking-wider">
            In the Box
          </h2>
          <ul className="space-y-2 md:mx-0 mx-auto">
            {product.includedItems.map((include, index) => (
              <li key={index} className="flex gap-6">
                <span className="text-primary font-bold">
                  {include.quantity}x
                </span>
                <span className="text-text-body capitalize">
                  {include.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
