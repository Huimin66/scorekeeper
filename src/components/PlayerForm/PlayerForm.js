import "./PlayerForm.css";

export default function PlayerForm({ onCreatePlayer }) {
  function createNewPlayer(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    onCreatePlayer(name.value);
    form.reset();
  }

  return (
    <form className="PlayerForm" onSubmit={createNewPlayer}>
      <label className="Label" htmlFor="name">
        Add Player
      </label>
      <input
        type="text"
        id="name"
        className="InputPlayerName"
        aria-label="Player name"
      ></input>
      <button className="SubmitButton">Create Player</button>
    </form>
  );
}
