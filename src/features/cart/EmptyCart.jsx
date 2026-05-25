const EmptyCart = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-24 h-24 flex items-center justify-center">
        <img
          src="/images/cart/empty-cart.webp"
          alt="Empty Cart"
          className="w-full h-full object-contain opacity-70"
        />
      </div>

      <p className="text-text-body font-medium text-base tracking-wide text-center mt-4">
        The cart is empty
      </p>
    </div>
  );
};

export default EmptyCart;
