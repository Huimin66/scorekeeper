import "./PlayerForm.css";

export default function PlayerForm({ onCreatePlayer }) {
  function createNewPlayer(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    onCreatePlayer(name.value);
    form.reset();
    name.focus();
  }

  return (
    <form
      className="PlayerForm"
      aria-labelledby="Player"
      onSubmit={createNewPlayer}
    >
      <h2 id="Player"> Add new Player</h2>
      <label htmlFor="name"></label>
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
