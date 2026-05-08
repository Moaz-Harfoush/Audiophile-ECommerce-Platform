import { NavLink } from "react-router-dom";

const Button = ({ url = "/", text = "See Product", variant = "primary" }) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary-light text-text-white border-transparent",
    ghost:
      "bg-transparent hover:bg-black-pure hover:text-text-white text-black-pure border-black-pure border",
    "dark-solid":
      "bg-black-light hover:bg-gray-hover text-text-white border-transparent",
  };

  return (
    <NavLink
      to={url}
      className={`${variants[variant]} w-fit px-8 py-4 uppercase text-[13px] tracking-[1px] font-bold standard-smooth inline-block`}
    >
      {text}
    </NavLink>
  );
};

export default Button;
