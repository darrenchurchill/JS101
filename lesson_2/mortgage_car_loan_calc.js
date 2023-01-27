/**
 * Darren Churchill
 *
 * mortgage_car_loan_calc.js
 *
 * A command-line mortgage / car loan calculator.
 *
 * Prompts the user for:
 *   - loan amount
 *   - the interest rate: annual percentage rate (APR)
 *   - loan duration
 *
 * Outputs:
 *   - the monthly payment
 */

const readline = require('readline-sync');

function prompt(msg, repromptMsg = "Invalid input.", validator = () => true) {
  // prompt the user and return the user input
  while (true) {
    let input = readline.question(`=> ${msg}\n`);
    if (validator(input)) return input;
    console.log(`=> ${repromptMsg}\n`);
  }
}

function isValidNumber(numString) {
  let num = Number.parseFloat(numString);
  return !Number.isNaN(num) && num >= 0;
}

function isValidInteger(numString) {
  return isValidNumber(numString)
    && Number.isInteger(Number.parseFloat(numString));
}

// eslint-disable-next-line max-lines-per-function
function getInput() {
  // get all of the user input for making the calculation
  let loanAmt = Number.parseFloat(prompt(
    "What is the loan amount?\nOmit units. Ex: 10000 OR 14000.72",
    "Loan amount must be a number greater than zero.",
    isValidNumber
  ));
  let apr = Number.parseFloat(prompt(
    "What is the annual interest rate (APR)? Ex: 5 OR 4.01 OR 4%",
    "APR must be a number greater than zero.",
    isValidNumber
  ));
  apr /= 100;
  let durationYrs = Number.parseFloat(prompt(
    "What is the loan duration (years)?\nEnter a whole number. Ex: 3 OR 5",
    "Loan duration years must be an integer greater than zero",
    isValidInteger
  ));
  let durationMonths = Number.parseFloat(prompt(
    "What is the loan duration (months)?\nEnter a whole number. Ex: 10 OR 12",
    "Loan duration months must be an integer greater than zero",
    isValidInteger
  ));

  return [loanAmt, apr, durationYrs, durationMonths];
}

function calculateMonthlyPmt(loanAmt, APR, loanYrs, loanMonths) {
  let monthlyRate = APR / 12;
  loanMonths = (loanYrs * 12) + loanMonths;
  if (monthlyRate === 0) return loanAmt / loanMonths;

  return loanAmt * (monthlyRate
                    / (1 - Math.pow((1 + monthlyRate), (-loanMonths))));
}

function shouldContinue() {
  let input = prompt('Perform another calculation? [yN]');
  input = input.toLowerCase();
  return input === 'y';
}

function doCalculator() {
  console.log('Mortgage / Car Loan Calculator:');
  while (true) {
    let pmt = calculateMonthlyPmt(...getInput());
    console.log(`The monthly payment is $${pmt.toFixed(2)}`);
    if (!shouldContinue()) return;
  }
}

doCalculator();