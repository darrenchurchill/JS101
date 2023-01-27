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
    "Loan duration must be a number greater than zero",
    isValidNumber
  ));

  return [loanAmt, apr, durationYrs];
}

function calculateMonthlyPmt(loanAmt, APR, loanYrs) {
  let monthlyRate = APR / 12;
  let loanMonths = loanYrs * 12;
  if (monthlyRate === 0) return loanAmt / loanMonths;

  return loanAmt * (monthlyRate
                    / (1 - Math.pow((1 + monthlyRate), (-loanMonths))));
}

function doCalculator() {
  console.log('Mortgage / Car Loan Calculator:');
  let pmt = calculateMonthlyPmt(...getInput());
  console.log(`The monthly payment is $${pmt.toFixed(2)}`);
}

doCalculator();