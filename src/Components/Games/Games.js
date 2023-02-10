import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Game from './Game.js';
import GameOptions from './GameOptions.js';
import NewGame from './NewGame.js';
import fetchGames from './Fetching/FetchGames.js';
import submitUser from './Fetching/UpdateUser.js';
import { LoggedInContext, UserContext } from '../../App';

function Games({ setUser }) {
  
  const isLoggedIn = useContext(LoggedInContext);
  const user = useContext(UserContext);
  const [games, _setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("none");
  const navigate = useNavigate();

  const gamesRef = useRef(games);

  function setGames(data) {
    gamesRef.current = data;
    _setGames(data);
  };

  useEffect(() => {
    async function gameProvider(userId) {
      const gamePkgs = await fetchGames(userId);
      setGames(gamePkgs);
    }
    if (Object.keys(user).length > 0) {
      gameProvider(user.id);
      setSelectedGame(user.current_game);
    }
  }, [user]);

  useEffect(() => {
    function sendHome(logStatus) {
      if (logStatus === false) {
        navigate("/home");
      }
    }
    sendHome(isLoggedIn);
  }, [isLoggedIn, navigate]);

  async function handleSelect(value) {
    setSelectedGame(value);
    const updatedUser = await submitUser(user.id, {...user, current_game: value})
    setUser(updatedUser);
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value={"none"}>New Game</option>
          {
            games.length > 0 ?
              games.map((game) =>
                <GameOptions
                  key={`game${game.game.id}`}
                  game={game.game}
                  selectedGame={selectedGame}
                />
              )
            : <option value={{}}>No games available</option>
          }
        </select>
      </div>
        {
          selectedGame !== "none" && gamesRef.current.length > 0 ?
            <Game gamePkg={gamesRef.current.find((game) => game.game.id === parseInt(selectedGame))} games={gamesRef.current} setGames={setGames} />
          : <NewGame games={gamesRef.current} setGames={setGames} setGame={setSelectedGame} />
        }
    </div>
  );
};

export default Games;