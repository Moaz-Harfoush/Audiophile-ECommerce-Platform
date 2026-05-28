import React from "react";

import { useForm, FormProvider } from "react-hook-form";

import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentMethod from "./PaymentMethod";
import CheckoutSummary from "./CheckoutSummary";

const Form = ({ checkoutMethod }) => {
  /* Establish primary react-hook-form hub capturing default form initial settings */
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    mode: "onTouched", // Trigger analytical runtime verification on input focus blur actions
  });

  const onSubmit = (data) => {
    /* Valid state data interception sequence launching success dialog triggers */
    checkoutMethod.openOverlay();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full"
      >
        {/* User context analytical questionnaire zones */}
        <div className="lg:col-span-2 space-y-10 p-6 md:p-8">
          <BillingDetails />
          <ShippingInfo />
          <PaymentMethod />
        </div>

        {/* Floating receipt calculations summation sticky area */}
        <div>
          <CheckoutSummary />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
