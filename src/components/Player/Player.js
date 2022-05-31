import "./Player.css";

export default function Player({ name, score }) {
  return (
    <li className="PlayerContainer">
      <span className="Name">{name}</span>
      <div className="ChangeScore">
        <button>-</button>
        <span>{score}</span>
        <button>+</button>
      </div>
    </li>
  );
}
