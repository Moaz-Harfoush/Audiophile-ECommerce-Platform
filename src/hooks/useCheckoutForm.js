import { useState } from "react";
import { VALIDATION_RULES } from "../utils/validationRules";
import Overlay from "../components/ui/Overlay";

const useCheckoutForm = () => {
  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e, onSuccess) => {
    e.preventDefault();
    let currentErrors = {};
    let isFormValid = true;

    Object.keys(VALIDATION_RULES).forEach((field) => {
      if (
        formData.paymentMethod === "cash" &&
        (field === "eMoneyNumber" || field === "eMoneyPin")
      ) {
        return;
      }

      const regex = VALIDATION_RULES[field];
      const value = formData[field].trim();

      if (!value) {
        currentErrors[field] = "Field is required";
        isFormValid = false;
      } else if (!regex.test(value)) {
        currentErrors[field] = "Not valid";
        isFormValid = false;
      }
    });

    if (isFormValid) {
      setErrors({});
      setIsOverlayOpen(true);
    } else {
      setErrors(currentErrors);
    }
  };

  const closeOverlay = () => setIsOverlayOpen(false);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleInputChange,
    handleSubmit,
    isOverlayOpen,
    closeOverlay,
  };
};

export default useCheckoutForm;
