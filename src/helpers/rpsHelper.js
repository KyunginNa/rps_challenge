export const rpsHelper = (playerPick, computerPick) => {
  if (playerPick === computerPick) {
    return "You drew with the computer!";
  } else if (playerPick === "rock") {
    if (computerPick === "paper") {
      return "You lost!";
    } else {
      return "You won!";
    }
  } else if (playerPick === "scissors") {
    if (computerPick === "rock") {
      return "You lost!";
    } else {
      return "You won!";
    }
  } else {
    if (computerPick === "scissors") {
      return "You lost!";
    } else {
      return "You won!";
    }
  }
};
