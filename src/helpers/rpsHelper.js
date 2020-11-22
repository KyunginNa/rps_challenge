export const rpsHelper = (playerOnePick, playerTwoPick) => {
  if (playerOnePick === playerTwoPick) {
    return "This game was a draw!";
  } else if (playerOnePick === "rock") {
    if (playerTwoPick === "paper") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  } else if (playerOnePick === "scissors") {
    if (playerTwoPick === "rock") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  } else {
    if (playerOnePick === "scissors") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  }
};
