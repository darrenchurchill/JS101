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
    let result = readline.question(`=> ${msg}\n`);
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

function getInput(msgs) {
  let num1 = Number(
    prompt(msgs.num1Prompt, msgs.invalidNumPrompt, isValidNumber)
  );
  let num2 = Number(
    prompt(msgs.num2Prompt, msgs.invalidNumPrompt, isValidNumber)
  );

  let operation = prompt(
    msgs.operationPrompt,
    msgs.invalidOperationPrompt,
    isValidOperation
  );

  return [num1, num2, operation];
}

function shouldContinue(msgs) {
  let input = prompt(
    `${msgs.continuePrompt} [${msgs.continueYesOpt}${msgs.continueNoOpt.toUpperCase()}]`
  );
  input = input.toLowerCase();

  return input === msgs.continueYesOpt;
}

function calculate(num1, num2, operation, msgs) {
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
  console.log(`${msgs.resultOutput} ${output}\n`);
}

function doCalculator() {
  const LANG = process.env.LANG.toLowerCase().split('_')[0];
  const USER_MSGS = require('./calculator_messages.json')[LANG];

  while (true) {
    calculate(...getInput(USER_MSGS), USER_MSGS);
    if (!shouldContinue(USER_MSGS)) break;
  }
}

console.log('Welcome to the calculator!');
doCalculator();
