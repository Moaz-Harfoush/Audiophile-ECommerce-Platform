import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    /* History session contextual back navigation controller trigger */
    <button
      onClick={() => navigate(-1)} // Pops the current route path stack out to step back
      className="mb-14 text-text-body hover:underline hover:text-primary standard-smooth block"
    >
      Go Back
    </button>
  );
};

export default GoBack;
