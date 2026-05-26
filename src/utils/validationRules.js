export const VALIDATION_RULES = {
  name: /^[a-zA-Z\s]{3,30}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[0-9\s-]{10,15}$/,
  address: /^.{5,100}$/,
  zipCode: /^\d{5}$/,
  city: /^[a-zA-Z\s]{2,30}$/,
  country: /^[a-zA-Z\s]{2,30}$/,
  eMoneyNumber: /^\d{9}$/,
  eMoneyPin: /^\d{4}$/,
};
