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
const GAME_RESULTS = {
  tie: 0,
  userWin: 1,
  computerWin: 2,
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
    return GAME_RESULTS.userWin;
  } else if (VALID_CHOICES[computerChoice].beats.includes(userChoice)) {
    return GAME_RESULTS.computerWin;
  } else {
    return GAME_RESULTS.tie;
  }
}

function displayWinner(gameResult, userWins, computerWins) {
  let msg = '';

  if (gameResult === GAME_RESULTS.userWin) msg = 'You win!';
  else if (gameResult === GAME_RESULTS.computerWin) msg = 'Computer wins!';
  else if (gameResult === GAME_RESULTS.tie) msg = "It's a tie!";

  prompt(msg);
  prompt(`Current score: User: ${userWins} Computer: ${computerWins}`);
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

function play(bestOf = 5) {
  let userWins = 0;
  let computerWins = 0;

  while (true) {
    let choice = promptUserChoice();

    let randomIndex = Math.floor(Math.random()
                      * Object.keys(VALID_CHOICES).length);
    let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    let result = getWinner(choice, computerChoice);

    if (result === GAME_RESULTS.userWin) userWins += 1;
    else if (result === GAME_RESULTS.computerWin) computerWins += 1;
    displayWinner(result, userWins, computerWins);

    if (userWins * 2 > bestOf) {
      prompt(`You win the best of ${bestOf} games!!!`);
      return;
    } else if (computerWins * 2 > bestOf) {
      prompt(`Computer wins the best of ${bestOf} games!!!`);
      return;
    }
  }
}

while (true) {
  play();
  if (!playAnotherGame(promptToPlayAgain())) break;
}