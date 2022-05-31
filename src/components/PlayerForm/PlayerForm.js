import "./PlayerForm.css";
export default function PlayerForm() {
  return (
    <form className="PlayerForm">
      <label className="Label" htmlFor="name">
        Add Player
      </label>
      <input
        type="text"
        id="name"
        className="InputPlayerName"
        aria-label="Player name"
      ></input>
      <button>Create Player</button>
    </form>
  );
}
