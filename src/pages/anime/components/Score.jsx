import { addDecimalToScore } from "../../../utils/addDecimalToScore";
function Score({ className, score }) {
  const scoreToDecimal = addDecimalToScore(score);

  return (
    <span className={`rounded-full py-1 px-2 font-bold text-3xl ${className}`}>
      {score ? scoreToDecimal : ""}
    </span>
  );
}

export default Score;
