/**
 * Darren Churchill
 *
 * rock_paper_scissors.js
 *
 * A command-line Rock Paper Scissors game
 */

const readline = require('readline-sync');
const VALID_CHOICES = {
  rock: { beats: ['scissors', 'lizard'], shortOpt: 'r' },
  paper: { beats: ['rock', 'spock'], shortOpt: 'p' },
  scissors: { beats: ['paper', 'lizard'], shortOpt: 's' },
  lizard: { beats: ['paper', 'spock'], shortOpt: 'l' },
  spock: { beats: ['rock', 'scissors'], shortOpt: 'S' },
};

function isValidChoice(userChoice) {
  return Object.hasOwn(VALID_CHOICES, userChoice);
}

function parseChoiceString(userChoice) {
  // Object with structure {shortOpt: LongOpt}, ex: {r: 'rock',...}
  let shortChoices = Object.fromEntries(
    Object.keys(VALID_CHOICES).map((el) => {
      return [VALID_CHOICES[el].shortOpt, el];
    })
  );

  if (userChoice.length === 1) return shortChoices[userChoice];
  return userChoice;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function promptUserChoice() {
  let choiceOptions = "";
  for (let choice in VALID_CHOICES) {
    choiceOptions += `${choice} (${VALID_CHOICES[choice].shortOpt}), `;
  }
  choiceOptions = choiceOptions.slice(0, choiceOptions.length - 2);

  prompt(`Choose one: ${choiceOptions}`);
  let choice = parseChoiceString(readline.question());

  while (!isValidChoice(choice)) {
    prompt("That's not a valid choice");
    choice = parseChoiceString(readline.question());
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

function promptToPlayAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function playAnotherGame(userChoice) {
  return userChoice === 'y';
}

while (true) {
  let choice = promptUserChoice();

  let randomIndex = Math.floor(Math.random()
                    * Object.keys(VALID_CHOICES).length);
  let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);

  if (!playAnotherGame(promptToPlayAgain())) break;
}