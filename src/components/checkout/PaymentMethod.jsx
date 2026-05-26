import Input from "../ui/Input";

const PaymentMethod = ({
  formData,
  setFormData,
  handleInputChange,
  errors,
  setErrors,
}) => {
  const method = formData.paymentMethod;

  const handleMethodChange = (newMethod) => {
    setFormData((prev) => ({ ...prev, paymentMethod: newMethod }));
    if (newMethod === "cash") {
      setErrors((prev) => ({ ...prev, eMoneyNumber: "", eMoneyPin: "" }));
    }
  };

  return (
    <div className="space-y-6 pt-4">
      <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
        Payment Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <span className="text-xs font-bold text-black tracking-tight uppercase block pt-2">
          Payment Method
        </span>

        <div className="space-y-4">
          <div
            onClick={() => handleMethodChange("e-money")}
            className={`flex items-center gap-4 border-2 rounded-lg px-6 py-4 cursor-pointer transition-all ${
              method === "e-money" ? "border-primary" : "border-text-muted"
            }`}
          >
            <div className="w-5 h-5 rounded-full border border-text-muted flex items-center justify-center">
              {method === "e-money" && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              )}
            </div>
            <span className="text-sm font-bold text-black-pure">e-Money</span>
          </div>

          <div
            onClick={() => handleMethodChange("cash")}
            className={`flex items-center gap-4 border-2 rounded-lg px-6 py-4 cursor-pointer transition-all ${
              method === "cash" ? "border-primary" : "border-text-muted"
            }`}
          >
            <div className="w-5 h-5 rounded-full border border-text-muted flex items-center justify-center">
              {method === "cash" && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              )}
            </div>
            <span className="text-sm font-bold text-black-pure">
              Cash on Delivery
            </span>
          </div>
        </div>

        {method === "e-money" ? (
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 animate-fadeIn">
            <Input
              label="e-Money Number"
              name="eMoneyNumber"
              placeholder="238521993"
              value={formData.eMoneyNumber}
              onChange={handleInputChange}
              error={errors.eMoneyNumber} // ربط الخطأ
            />
            <Input
              label="e-Money PIN"
              name="eMoneyPin"
              placeholder="6891"
              value={formData.eMoneyPin}
              onChange={handleInputChange}
              error={errors.eMoneyPin} // ربط الخطأ
            />
          </div>
        ) : (
          <div className="md:col-span-2 flex items-start gap-6 pt-6 animate-fadeIn">
            <img src="/images/checkout/icon-cash-on-delivery.svg" alt="" />
            <p className="text-text-body text-[15px] font-medium leading-relaxed normal-case">
              The ‘Cash on Delivery’ option allows you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
