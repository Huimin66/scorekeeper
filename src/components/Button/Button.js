import "./Button.css";
export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="ResetButton">
      {text}
    </button>
  );
}
