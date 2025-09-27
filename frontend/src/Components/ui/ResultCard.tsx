import { useLocation, useNavigate } from "react-router";

function ResultCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) {
    navigate("/", { replace: true });
    return null;
  }
  return (
    <div className="p-4 font-outfit min-w-80">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Summary</h2>
        <p>{result.summary}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Possible remedies</h3>
        <p>{result.reasoning}</p>
      </div>
      <div>
        <p className="font-bold">Condition <span className="font-normal bg-red-300 rounded px-1">{result.condition}</span></p>
        <p className="font-bold">Confidence <span className="font-normal bg-red-300 rounded px-1">{result.confidence}</span></p>
      </div>
      <button className="p-3 bg-gray-700 text-white font-bold rounded mt-3.5">Consult the Doctor</button>
    </div>
  );
}

export default ResultCard;
