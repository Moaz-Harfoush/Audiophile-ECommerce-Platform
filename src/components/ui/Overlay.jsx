const Overlay = ({ active, setActive }) => {
  return (
    <div
      className={`
          fixed inset-0 bg-overlay z-40 standard-smooth
          ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      onClick={() => setActive(false)}
    ></div>
  );
};

export default Overlay;
