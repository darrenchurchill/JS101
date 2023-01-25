/**
 * Darren Churchill
 *
 * calculator.js
 *
 * A basic command-line calculator.
 *
 * Prompts the user for two numbers and an operation to perform.
 * Outputs the result to the console.
 */

const readline = require('readline-sync');

function prompt(msg, repromptMsg = "Invalid input.", validator = () => true) {
  while (true) {
    let result = readline.question(`=> ${msg}`);
    if (validator(result)) return result;
    console.log(`\n=> ${repromptMsg}`);
  }
}

function isValidNumber(numString) {
  return !Number.isNaN(Number.parseFloat(numString));
}

function isValidOperation(opString) {
  return ['1', '2', '3', '4'].includes(opString);
}

function getInput() {
  const NUM_REPROMPT = "That doesn't look like a valid number.";
  let num1 = Number(prompt("What's the first number?\n", NUM_REPROMPT, isValidNumber));
  let num2 = Number(prompt("What's the second number?\n", NUM_REPROMPT, isValidNumber));

  let operation = prompt(
    "What operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide\n",
    "Must choose 1, 2, 3, or 4",
    isValidOperation
  );

  return [num1, num2, operation];
}

function shouldContinue() {
  let input = prompt("Perform another calculation? [yN]\n");
  input = input.toLowerCase();

  return input === 'yes' || input === 'y';
}

function calculate(num1, num2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = num1 + num2;
      break;
    case '2':
      output = num1 - num2;
      break;
    case '3':
      output = num1 * num2;
      break;
    case '4':
      output = num1 / num2;
      break;
  }
  console.log(`The result is ${output}`);
}

function doCalculator() {
  while (true) {
    calculate(...getInput());
    if (!shouldContinue()) break;
  }
}

console.log('Welcome to the calculator!');
doCalculator();
