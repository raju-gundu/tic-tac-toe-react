import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X"/>
          <Player initialName="Player2" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
      Logs
    </main>
  );
}

export default App;
