export const returnResultOfRPS = (playerOnePick, playerTwoPick) => {
  const message = setResultMessage(playerOnePick, playerTwoPick);
  const score = setScore(message);
  return [message, score];
};

const setResultMessage = (playerOnePick, playerTwoPick) => {
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
    if (playerTwoPick === "scissors") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  }
};

const setScore = (message) => {
  if (message === "Player 1 won!") {
    return 1;
  } else if (message === "Player 2 won!") {
    return 2;
  } else {
    return 0;
  }
};
