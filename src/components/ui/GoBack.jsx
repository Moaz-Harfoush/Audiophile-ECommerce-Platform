import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-14 text-text-body hover:underline hover:text-primary standard-smooth block"
    >
      Go Back
    </button>
  );
};

export default GoBack;
