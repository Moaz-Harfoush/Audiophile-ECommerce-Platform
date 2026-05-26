import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentMethod from "./PaymentMethod";
import CheckoutSummary from "./CheckoutSummary";
import useCheckoutForm from "../../hooks/useCheckoutForm";

const Form = ({ checkoutMethod }) => {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    handleInputChange,
    handleSubmit,
  } = checkoutMethod;

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full"
    >
      <div className="lg:col-span-2 space-y-10">
        <BillingDetails
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
        />

        <ShippingInfo
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
        />

        <PaymentMethod
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <CheckoutSummary />
    </form>
  );
};

export default Form;
