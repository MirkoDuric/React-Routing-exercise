import { useNavigate } from "react-router-dom";
export default function Seeresults({ handleClick, studentId }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        handleClick(navigate(`/results/${studentId}`));
      }}
    >
      Student results
    </button>
  );
}
