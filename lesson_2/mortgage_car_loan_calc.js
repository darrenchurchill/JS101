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

function prompt(msg, validator = () => true) {
  // prompt the user and return the user input
  while (true) {
    let input = readline.question(`=> ${msg}\n`);
    if (validator(input)) return input;
    console.log("That input isn't valid");
  }
}

function isValidNumber(numString) {
  let num = Number.parseFloat(numString);
  return !Number.isNaN(num) && num > 0;
}

function getInput() {
  // get all of the user input for making the calculation
  let loanAmt = Number.parseFloat(
    prompt("What is the loan amount?", isValidNumber)
  );
  let apr = Number.parseFloat(
    prompt("What is the annual interest rate (APR)?", isValidNumber)
  );
  apr /= 100;
  let durationYrs = Number.parseFloat(
    prompt("What is the loan duration (years)?", isValidNumber)
  );

  return [loanAmt, apr, durationYrs];
}

function calculateMonthlyPmt(loanAmt, APR, loanYrs) {
  let monthlyRate = APR / 12;
  let loanMonths = loanYrs * 12;

  return loanAmt * (monthlyRate
                    / (1 - Math.pow((1 + monthlyRate), (-loanMonths))));
}

function doCalculator() {
  console.log('Mortgage / Car Loan Calculator:');
  let pmt = calculateMonthlyPmt(...getInput());
  console.log(`The monthly payment is $${pmt.toFixed(2)}`);
}

doCalculator();