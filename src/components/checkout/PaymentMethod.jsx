import React from "react";

import { useFormContext } from "react-hook-form";

import { ICONS } from "../../assets";

import Input from "../ui/Input";

const PaymentMethod = () => {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { Checkout } = ICONS;
  const method = watch("paymentMethod");

  /* Handles swapping state dependencies and flushes obsolete field input validation errors */
  const handleMethodChange = (newMethod) => {
    setValue("paymentMethod", newMethod);
    if (newMethod === "cash") {
      clearErrors(["eMoneyNumber", "eMoneyPin"]);
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

        {/* Custom structural Radio Selector blocks styling */}
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
            <span className="text-sm font-bold text-black">e-Money</span>
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
            <span className="text-sm font-bold text-black">
              Cash on Delivery
            </span>
          </div>
        </div>

        {/* Context-aware dynamic template switching zone */}
        {method === "e-money" ? (
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 animate-fadeIn">
            <Input
              label="e-Money Number"
              placeholder="238521993"
              error={errors.eMoneyNumber?.message}
              {...register("eMoneyNumber", {
                required: method === "e-money" ? "Field is required" : false,
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Not valid (9 digits required)",
                },
              })}
            />
            <Input
              label="e-Money PIN"
              placeholder="6891"
              error={errors.eMoneyPin?.message}
              {...register("eMoneyPin", {
                required: method === "e-money" ? "Field is required" : false,
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: "Not valid (4 digits required)",
                },
              })}
            />
          </div>
        ) : (
          <div className="md:col-span-2 flex items-start gap-6 pt-6 animate-fadeIn">
            <img src={Checkout} alt="Cash delivery notice" />
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
