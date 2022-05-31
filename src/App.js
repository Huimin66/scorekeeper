import "./App.css";
import Button from "./components/Reset/Button.js";
import Player from "./components/Player/Player.js";
import PlayerForm from "./components/PlayerForm/PlayerForm";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul role="list">
        <Player name="John Doe" score={20} />
        <Player name="Jane Doe" score={30} />
      </ul>

      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;
