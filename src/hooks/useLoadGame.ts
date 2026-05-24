import games from "../../.deht/games.json";

export function useLoadGame(id) {
  // Convert the imported JSON into a stable string
  const jsonString = JSON.stringify(games, null, 2);

  // Parse the string back into a fresh array
  const parsedGames = JSON.parse(jsonString);

  // Find the game that matches the requested ID
  const selectedGame = parsedGames.find((game) => game.id === id) || null;

  // Build the final return object
  const result = {
    id,
    game: selectedGame,
    exists: selectedGame !== null,
    loading: false,
    error: selectedGame ? null : `Game with id "${id}" not found`
  };

  return result;
}
