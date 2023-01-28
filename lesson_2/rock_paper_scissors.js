/**
 * Darren Churchill
 *
 * rock_paper_scissors.js
 *
 * A command-line Rock Paper Scissors game
 */

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function getWinner(userChoice, computerChoice) {
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    return 'You win!';
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) {
    return 'Computer wins!';
  } else {
    return "It's a tie!";
  }
}

function displayWinner(userChoice, computerChoice) {
  prompt(getWinner(userChoice, computerChoice));
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}