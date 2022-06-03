import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button.js";
import Player from "./components/Player/Player.js";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import { nanoid } from "nanoid";

function App() {
  const [players, setPlayers] = useState([]);

  function createPlayer(nameInput) {
    if (!nameInput) {
      alert("Please enter a valid name");
      return;
    }
    setPlayers([...players, { id: nanoid(), name: nameInput, score: 0 }]);
  }

  function increaseScore(id) {
    setPlayers(
      players.map((player) => {
        return player.id === id
          ? { id: player.id, name: player.name, score: player.score + 1 }
          : player;
      })
    );
  }

  function decreaseScore(id) {
    setPlayers(
      players.map((player) => {
        return player.id === id
          ? { id: player.id, name: player.name, score: player.score - 1 }
          : player;
      })
    );
  }

  function resetScore() {
    setPlayers(
      players.map((player) => {
        return { id: player.id, name: player.name, score: 0 };
      })
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  return (
    <div className="App">
      <h1 className="Title">Scorekeeper</h1>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {players.map((player) => {
          return (
            <Player
              key={player.id}
              name={player.name}
              id={player.id}
              score={player.score}
              onIncreaseScore={increaseScore}
              onDecreaseScore={decreaseScore}
            />
          );
        })}
      </ul>

      <Button onClick={resetScore} text="Reset scores" />
      <Button onClick={resetAllPlayers} text="Reset all" />
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
