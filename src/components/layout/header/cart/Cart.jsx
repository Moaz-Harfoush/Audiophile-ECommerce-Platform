const Cart = ({ isCartOpen, children }) => {
  return (
    <div
      className={`
        absolute top-4 h-110 sm:h-104  z-50 bg-white rounded-lg shadow-2xl p-8
        left-8 right-8 md:left-auto md:right-16
        w-auto md:w-86 
        origin-top-right
        standard-smooth
        
        ${
          isCartOpen
            ? "opacity-100 scale-100 translate-y-32 pointer-events-auto"
            : "opacity-0 scale-0 translate-y-12 pointer-events-none"
        }
      `}
    >
      {children}
    </div>
  );
};

export default Cart;
