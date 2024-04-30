#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from"chalk"

console.log(chalk.blue.bold("\n \tWelcome to Rimsha's Currency_Converter Project\n"))
//Define the list of currencies and their exchange rates

let exchange_rate: any = {
"USD": 1, // Base currency
"EUR": 0.9, // European Currency
"JYP": 113, // Japenese Currency 
"CAD": 1.3, // Canadian Dollars
"AUD": 1.65, // Australian Dollars
"PKR": 277.78 , // Pakistani rupees
"IRR": 0.00066,          // Iran Rial
"IQD":  0.21,      // iRAQ DINAR
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "IRR", "IQD"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices:  ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "IRR", "IQD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using formula

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Formula of currency conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log(`Converted Amount ${chalk.green(converted_amount.toFixed(2))}`);