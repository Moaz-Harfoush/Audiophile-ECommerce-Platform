import React from "react";

const CategoryHeader = ({ title }) => {
  return (
    <section className="bg-black-light w-full">
      <div className="container h-58 flex justify-center items-center">
        {/* Dynamic header title based on the active category */}
        <h1 className="text-white text-2xl md:text-4xl font-bold uppercase md:tracking-widest">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CategoryHeader;
