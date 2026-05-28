import React from "react";

import { useFormContext } from "react-hook-form";

import Input from "../ui/Input";

const ShippingInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
        Shipping Info
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Address"
          placeholder="1137 Williams Avenue"
          className="md:col-span-2"
          {...register("address", { required: "Field is required" })}
          error={errors.address?.message}
        />

        <Input
          label="ZIP Code"
          placeholder="10001"
          {...register("zipCode", {
            required: "Field is required",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "Not valid (5 digits required)",
            },
          })}
          error={errors.zipCode?.message}
        />

        <Input
          label="City"
          placeholder="New York"
          {...register("city", {
            required: "Field is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Not valid (Letters only)",
            },
          })}
          error={errors.city?.message}
        />

        <Input
          label="Country"
          placeholder="United States"
          {...register("country", {
            required: "Field is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Not valid (Letters only)",
            },
          })}
          error={errors.country?.message}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
