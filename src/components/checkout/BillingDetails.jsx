import Input from "../ui/Input";

const BillingDetails = ({ formData, errors, handleInputChange }) => {
  return (
    <div>
      <h3 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">
        Billing Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          placeholder="Alexei Ward"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="alexei@mail.com"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+1 202-555-0136"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
        />
      </div>
    </div>
  );
};

export default BillingDetails;
