import React, { useContext } from "react";
import joinGame from "./Fetching/JoinGame.js";
import { UserContext } from '../../App';

function PublicGameCard({ game, setPublicGames }) {

  const user = useContext(UserContext);

  async function handleClick() {
    const publicGames = await joinGame(game.id, user.id);
    setPublicGames(publicGames);
  };

  return (
    <div className="game_card">
      <p><b>{game.title}</b></p>
      <p><b>Players:</b></p>
      {game.players.map((player) => <p>{player}</p>)}
      <p><b>Game Type: </b>{game.email_notifications ? "asynchronous" : "synchronous"}</p>
      <button onClick={(e) => handleClick()}>Join</button>
    </div>
  );
};

export default PublicGameCard;