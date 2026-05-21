const Overlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
          fixed inset-0 bg-overlay z-40 top-0 standard-smooth
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      onClick={() => onClose(false)}
    ></div>
  );
};

export default Overlay;
