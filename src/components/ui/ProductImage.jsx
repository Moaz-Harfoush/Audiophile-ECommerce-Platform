const ProductImage = ({
  desktop,
  tablet,
  mobile,
  alt,
  className,
  isPriority = false,
}) => (
  <picture className={className}>
    <source media="(min-width: 1024px)" srcSet={desktop} />
    <source media="(min-width: 768px)" srcSet={tablet} />
    <img
      src={mobile}
      alt={alt}
      className="w-full h-full object-cover"
      loading={isPriority ? "eager" : "lazy"}
      fetchPriority={isPriority ? "high" : "auto"}
    />
  </picture>
);

export default ProductImage;
