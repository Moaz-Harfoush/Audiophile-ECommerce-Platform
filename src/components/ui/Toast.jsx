import { useEffect, useState } from "react";

const Toast = ({ isVisible, message, type, onClose }) => {
  /* Internal safe-keeping variables retain feedback text temporarily during dismissal structural exit fades */
  const [activeMessage, setActiveMessage] = useState(message);
  const [activeType, setActiveType] = useState(type);

  useEffect(() => {
    if (isVisible) {
      setActiveMessage(message);
      setActiveType(type);

      /* Automatically triggers unmounting cleanup sequences after a 3000ms threshold window */
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, message, type, onClose]);

  const isError = activeType === "error";

  return (
    <div
      className={`
        fixed bottom-5 left-5 z-50
        text-white text-[13px] font-bold tracking-[1px]
        px-6 py-4 rounded-lg shadow-2xl
        flex items-center gap-3 uppercase
        standard-smooth
        ${isError ? "bg-error" : "bg-primary"}
        
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }
      `}
    >
      <span className="text-tetx-white text-base">{isError ? "✕" : "✓"}</span>
      <span>{activeMessage}</span>
    </div>
  );
};

export default Toast;
