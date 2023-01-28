/**
 * Darren Churchill
 *
 * rock_paper_scissors.js
 *
 * A command-line Rock Paper Scissors game
 */

const readline = require('readline-sync');
const VALID_CHOICES = {
  rock: { beats: ['scissors', 'lizard'] },
  paper: { beats: ['rock', 'spock'] },
  scissors: { beats: ['paper', 'lizard'] },
  lizard: { beats: ['paper', 'spock'] },
  spock: { beats: ['rock', 'scissors'] },
};

function isValidChoice(userChoice) {
  return Object.hasOwn(VALID_CHOICES, userChoice);
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function promptUserChoice() {
  prompt(`Choose one: ${Object.keys(VALID_CHOICES).join(', ')}`);
  let choice = readline.question();

  while (!isValidChoice(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  return choice;
}

function getWinner(userChoice, computerChoice) {
  if (VALID_CHOICES[userChoice].beats.includes(computerChoice)) {
    return 'You win!';
  } else if (VALID_CHOICES[computerChoice].beats.includes(userChoice)) {
    return 'Computer wins!';
  } else {
    return "It's a tie!";
  }
}

function displayWinner(userChoice, computerChoice) {
  prompt(getWinner(userChoice, computerChoice));
}

while (true) {
  let choice = promptUserChoice();

  let randomIndex = Math.floor(Math.random()
                    * Object.keys(VALID_CHOICES).length);
  let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

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