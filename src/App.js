import "./App.css";
import Button from "./components/Button/Button.js";
import Player from "./components/Player/Player.js";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import { players } from "./playerData.js";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <ul role="list">
        {players.map((player) => {
          return <Player name={player.name} score={player.score} />;
        })}
      </ul>

      <Button text="Reset scores" />
      <Button text="Reset all" />
      <PlayerForm />
    </div>
  );
}

export default App;
