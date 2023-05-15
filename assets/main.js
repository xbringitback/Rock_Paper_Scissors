// getElements
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

const outputText = document.querySelector("#outputtext")
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");

const roundCounter = document.querySelector("#roundcounter");


// setVariables
let playerScoreCount = 0;
let computerScoreCount = 0;
let roundCount = 0;


const options = ["Rock", "Paper", "Scissors"];

// function bing bong

document.querySelectorAll(".options input").forEach((button) => {
  button.addEventListener("click", () => {
    event.preventDefault();

    const rounds = document.querySelector('input[name="rounds"]:checked').value;

    const radioContainer = document.querySelector(".rounds");
    radioContainer.style.display = "none";
    const counter = document.querySelector(".counter");
    counter.style.display = "block";

    const playerChoiceIndex = options.indexOf(button.value);

    const computerChoiceIndex = Math.floor(Math.random() * 3);

    const playerChoice = options[playerChoiceIndex];
    const computerChoice = options[computerChoiceIndex];

    playerHand.src = `./assets/imgs/${playerChoice}.png`;
    computerHand.src = `./assets/imgs/${computerChoice}.png`;

    if (playerChoiceIndex === computerChoiceIndex) {
      computerScoreCount++;
      playerScoreCount++;
      outputText.innerHTML = "It's a tie! 😐";
      button.style.backgroundColor = "rgb(119,136,153)";
      setTimeout(() => {
      button.style.backgroundColor = "";}, 250);
    } else if ((playerChoiceIndex - computerChoiceIndex + 3) % 3 === 1) {
      playerScoreCount++;
      outputText.innerHTML = "You win! 😎";
      button.style.backgroundColor = "rgb(52, 167, 52)";
      setTimeout(() => {
      button.style.backgroundColor = "";}, 250);
    } else {
      computerScoreCount++;
      outputText.innerHTML = "You lose! 😭";
      button.style.backgroundColor = "rgb(204, 21, 21)";
      setTimeout(() => {
      button.style.backgroundColor = "";}, 250);
    }
    playerScore.innerHTML = playerScoreCount;
    computerScore.innerHTML = computerScoreCount;
    
    roundCount++;
    roundCounter.innerHTML = `${roundCount}/${rounds}`;
    if (roundCount > rounds -1) {
      roundCounter.innerHTML = "";
      const animateText = () => {
        const text = roundCounter.innerHTML;
        roundCounter.innerHTML = text.length === 0 ? "Restart the Game!" : "";
      };
      setInterval(animateText, 350);
      if (playerScoreCount > computerScoreCount) {
        outputText.innerHTML = "You won the Game!";
        outputText.style.color = "rgb(52, 167, 52)";
      } else if (playerScoreCount < computerScoreCount) {
        outputText.innerHTML = "You lost the Game!";
        outputText.style.color = "rgb(204, 21, 21)";
      } else {
        outputText.innerHTML = "It's a tie Game!";
        outputText.style.color = "rgb(119,136,153)";
      }
      document.querySelectorAll('.options input').forEach((button)=> {
        button.disabled = true;

        const removeText = document.querySelector(".remove-text");
        removeText.style.display = "none";
      })
    }
  })
})
