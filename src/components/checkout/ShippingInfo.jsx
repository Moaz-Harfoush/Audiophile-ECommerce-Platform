import Input from "../ui/Input";

const ShippingInfo = ({ formData, errors, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
        Shipping Info
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Your Address"
          name="address"
          placeholder="1137 Williams Avenue"
          className="md:col-span-2"
          value={formData.address}
          onChange={handleInputChange}
          error={errors.address}
        />
        <Input
          label="ZIP Code"
          name="zipCode"
          placeholder="10001"
          value={formData.zipCode}
          onChange={handleInputChange}
          error={errors.zipCode}
        />
        <Input
          label="City"
          name="city"
          placeholder="New York"
          value={formData.city}
          onChange={handleInputChange}
          error={errors.city}
        />
        <Input
          label="Country"
          name="country"
          placeholder="United States"
          value={formData.country}
          onChange={handleInputChange}
          error={errors.country}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
