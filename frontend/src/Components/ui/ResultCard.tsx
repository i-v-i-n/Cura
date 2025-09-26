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
    <div className="p-4 border rounded-lg shadow-md font-outfit">
      <div>
        <h2>Summary</h2>
        <p>{result.summary}</p>
      </div>
      <div>
        <h3>Possible remedies</h3>
        <ul className="list-disc list-inside">
          {result.remedies.map((remedy: string, i: number) => (
            <li key={i}>{remedy}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Condition <span>{result.condition}</span></p>
        <p>Confidence <span>{result.confidence}</span></p>
      </div>
    </div>
  );
}

export default ResultCard;
