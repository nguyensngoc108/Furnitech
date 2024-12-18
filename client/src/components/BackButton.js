import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleGoBack}
      className="px-4 py-2 bg-brown-200 text-brown-1000 font-semibold text-2xl rounded-md hover:bg-brown-400"
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;
