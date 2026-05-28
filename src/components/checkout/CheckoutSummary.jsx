import Button from "../ui/Button";
import useCartTotals from "../../hooks/useCartTotals";

const CheckoutSummary = () => {
  const { cartItems, totalPrice, grandTotal } = useCartTotals();

  return (
    <div className="rounded-lg p-2 md:p-8">
      <h2 className="text-lg font-bold tracking-wider uppercase mb-8 text-black-pure">
        Summary
      </h2>

      <div className="max-h-60 overflow-y-auto pr-2 space-y-4 mb-6 scrollbar-thin scrollbar-thumb-gray-light">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={item.cartImage}
                  alt={item.shortName}
                  className="w-16 h-16 bg-text-body rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold uppercase text-black-pure">
                    {item.shortName}
                  </h4>
                  <p className="text-sm font-bold text-text-body mt-1">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-text-body">
                x{item.quantity}
              </span>
            </div>
          );
        })}
      </div>

      <div className="space-y-4 text-sm font-medium uppercase mb-8">
        <div className="flex justify-between">
          <span className="text-text-body font-bold text-base">Total</span>
          <span className="font-bold text-black text-base">
            $ {totalPrice.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-body font-bold text-base">Shipping</span>
          <span className="font-bold text-black text-base">$ 50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-body font-bold text-base">
            VAT (Included)
          </span>
          <span className="font-bold text-black text-base">
            $ {Math.round(totalPrice * 0.2).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between pt-4 mt-4">
          <span className="text-text-body font-bold text-base">
            Grand Total
          </span>
          <span className="font-bold text-primary text-lg">
            $ {grandTotal.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="*:w-full">
        <Button text="Continue & Pay" type="submit" />
      </div>
    </div>
  );
};

export default CheckoutSummary;
