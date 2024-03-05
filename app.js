const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const buttons = document.querySelectorAll("button");
let userChoice;

buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    let computerChose = computerChooses();
    computerChoiceDisplay.innerHTML = computerChose;
    resultDisplay.innerHTML = resultIs(userChoice, computerChose);
  });
});

function computerChooses() {
  let n = Math.floor(Math.random() * buttons.length);
  if (n == 0) {
    return "Rock";
  }
  if (n == 1) {
    return "Paper";
  }
  if (n == 2) {
    return "Scissors";
  }
}

function resultIs(user, computer) {
  // draw cases
  if (user === computer) {
    return "Draw";
  }

  // user win cases
  if (
    (user == "Rock" && computer == "Scissors") ||
    (user == "Paper" && computer == "Rock") ||
    (user == "Scissors" && computer == "Paper")
  ) {
    return "Congrats,you won!";
  }

  // computer win cases
  if (
    (user == "Rock" && computer == "Paper") ||
    (user == "Paper" && computer == "Scissors") ||
    (user == "Scissors" && computer == "Rock")
  ) {
    return "The Computer won!";
  }
}
