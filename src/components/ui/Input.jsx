import { useId } from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
  name,
  error,
}) => {
  const inputId = useId();

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <label
          htmlFor={inputId}
          className={`text-xs font-bold tracking-tight ${error ? "text-error" : "text-black"}`}
        >
          {label}
        </label>
        {error && (
          <span className="text-error text-xs font-bold transition-all animate-fadeIn">
            {error}
          </span>
        )}
      </div>

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border-2 rounded-lg px-6 py-4 text-sm font-bold text-black-pure 
        placeholder:text-text-body placeholder:font-medium focus:outline-none transition-colors caret-primary
        ${error ? "border-error focus:border-error" : "border-text-muted focus:border-primary"}`}
      />
    </div>
  );
};

export default Input;
