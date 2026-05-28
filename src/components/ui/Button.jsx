import { NavLink } from "react-router-dom";

const Button = ({
  url,
  text = "See Product",
  variant = "primary",
  onClick,
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-light text-text-white border-transparent",
    ghost:
      "bg-transparent hover:bg-black-pure hover:text-text-white text-black-pure border-black-pure border",
    "dark-solid":
      "bg-black-light hover:bg-gray-hover text-text-white border-transparent",
  };

  const sharedClasses = `${variants[variant]} w-fit px-8 py-4 uppercase text-[13px] tracking-[1px] font-bold standard-smooth inline-block whitespace-nowrap`;

  if (url) {
    return (
      <NavLink to={url} onClick={onClick} className={sharedClasses}>
        {text}
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={sharedClasses} type={type}>
      {text}
    </button>
  );
};

export default Button;
