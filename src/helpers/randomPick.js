const randomPick = () => {
  const rpsArray = ["rock", "paper", "scissors"];
  let randomItem = rpsArray[Math.floor(Math.random() * rpsArray.length)];
  return randomItem;
};

export default randomPick;
