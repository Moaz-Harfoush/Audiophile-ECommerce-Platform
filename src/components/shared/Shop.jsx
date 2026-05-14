import { NavLink } from "react-router-dom";

import { IMAGES } from "../../assets";

const categories = [
  {
    name: "HEADPHONES",
    img: IMAGES.shared.categories.headphones,
    link: "/headphones",
  },
  {
    name: "SPEAKERS",
    img: IMAGES.shared.categories.speakers,
    link: "/speakers",
  },
  {
    name: "EARPHONES",
    img: IMAGES.shared.categories.earphones,
    link: "/earphones",
  },
];

const Shop = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center gap-20 md:gap-8 flex-wrap lg:flex-nowrap">
          {categories.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              className="relative flex flex-col items-center bg-gray-light rounded-lg w-full sm:w-[320px] h-50 group standard-smooth"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-50 h-50 object-contain -mt-20 drop-shadow-2xl transform group-hover:scale-105 standard-smooth"
                loading="lazy"
              />

              <div className="text-center pb-6 mt-auto">
                <h2 className="text-black-pure text-lg font-bold tracking-widest mb-4">
                  {item.name}
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-border font-bold group-hover:text-primary standard-smooth">
                  SHOP
                  <span className="text-primary text-xl font-bold"> &gt; </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
