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

function prompt(msg) {
  return readline.question(`=> ${msg}`);
}

console.log('Welcome to the calculator!');

let num1 = Number(prompt("What's the first number?\n"));
let num2 = Number(prompt("What's the second number?\n"));

let operation = prompt(
  "What operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide\n"
);

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