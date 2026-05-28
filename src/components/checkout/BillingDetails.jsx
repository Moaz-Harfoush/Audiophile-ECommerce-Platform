import React from "react";

import { useFormContext } from "react-hook-form";

import Input from "../ui/Input";

const BillingDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
        Billing Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          placeholder="Alexei Ward"
          {...register("name", { required: "Field is required" })}
          error={errors.name?.message}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="alexei@mail.com"
          error={errors.email?.message}
          {...register("email", {
            required: "Field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Not valid",
            },
          })}
        />

        {/* FIXED: Merged duplicated register declarations into a single robust config object */}
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 202-555-0136"
          error={errors.phone?.message}
          {...register("phone", {
            required: "Field is required",
            pattern: {
              value: /^\+?[0-9\s-]{10,15}$/i,
              message: "Not valid",
            },
          })}
        />
      </div>
    </div>
  );
};

export default BillingDetails;
