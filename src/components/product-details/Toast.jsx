import React from "react";

const Toast = ({ isVisible, message, type }) => {
  const isError = type === "error";

  return (
    <div
      className={`
        fixed bottom-5 left-5 z-50
        text-white text-[13px] font-bold tracking-[1px]
        px-6 py-4 rounded-lg shadow-2xl
        flex items-center gap-3 uppercase
        transition-all duration-300 ease-in-out
        ${isError ? "bg-black-main" : "bg-primary"}
        
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }
      `}
    >
      <span className="text-white text-base">{isError ? "✕" : "✓"}</span>

      <span>{message}</span>
    </div>
  );
};

export default Toast;
