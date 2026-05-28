import React, { useId } from "react";

/* Ref forwarding wrapper guarantees smooth binding integration with external form validation houses */
const Input = React.forwardRef(
  (
    { label, type = "text", placeholder, className = "", error, ...props },
    ref,
  ) => {
    /* Auto-generates fully safe matching HTML accessibility identity attributes pairs */
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

          {/* Reactive error textual node feedback injection block */}
          {error && (
            <span className="text-error text-xs font-bold transition-all animate-fadeIn">
              {error}
            </span>
          )}
        </div>

        <input
          ref={ref}
          id={inputId}
          type={type}
          placeholder={placeholder}
          {...props}
          className={`w-full border-2 rounded-lg px-6 py-4 text-sm font-bold text-black 
          placeholder:text-text-muted placeholder:font-medium focus:outline-none transition-colors caret-primary
          ${error ? "border-error focus:border-error" : "border-text-muted focus:border-primary"}`}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
