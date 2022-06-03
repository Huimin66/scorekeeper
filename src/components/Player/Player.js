import "./Player.css";

export default function Player({
  name,
  score,
  id,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <li className="PlayerContainer">
      <span className="Name">{name}</span>
      <div className="ChangeScore">
        <button onClick={() => onDecreaseScore(id)}>
          <span className="Operater">-</span>
        </button>
        <span>{score}</span>
        <button onClick={() => onIncreaseScore(id)}>
          <span className="Operater">+</span>
        </button>
      </div>
    </li>
  );
}
