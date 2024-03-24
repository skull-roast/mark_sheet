#! /user/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let totalMarks = 500;

let marks = await inquirer.prompt([
    {
        "name": "english",
        "type": "number",
        "message": chalk.blueBright("Enter the marks obtained in English:"),
    },
    {
        "name": "math",
        "type": "number",
        "message": chalk.blueBright("Enter the marks obtained in Math:"),
    },
    {
        "name": "islamiyat",
        "type": "number",
        "message": chalk.blueBright("Enter the marks obtained in Islamiyat:"),
    },
    {
        "name": "science",
        "type": "number",
        "message": chalk.blueBright("Enter the marks obtained in Science:"),
    },
    {
        "name": "physics",
        "type": "number",
        "message": chalk.blueBright("Enter the marks obtained in Physics:"),
    },
])


let obtainedMarks: number = marks.english + marks.physics + marks.islamiyat + marks.physics + marks.science

let obtainedPercentage: number = Math.round(obtainedMarks / totalMarks * 100)

console.log(chalk.bgBlue('obtainedMarks: ', obtainedMarks));

console.log(chalk.bgGreenBright('obtainedPercentage: ', obtainedPercentage));

if (obtainedPercentage >= 80) {
    console.log(chalk.bgGray.greenBright(`your obtained percentage is ${obtainedPercentage}% congratulation you got Grade: "A+"`))
}
else if (obtainedPercentage >= 70) {
    console.log(chalk.bgGray.greenBright(`your obtained percentage is ${obtainedPercentage}% congratulation you got Grade: "A"`))
}
else if (obtainedPercentage >= 60) {
    console.log(chalk.bgGray.greenBright(`your obtained percentage is ${obtainedPercentage}% congratulation you got Grade: "B"`))
}
else if (obtainedPercentage >= 50) {
    console.log(chalk.bgGray.greenBright(`your obtained percentage is ${obtainedPercentage}% congratulation you got Grade: "C"`))
}
else if (obtainedPercentage < 50) {
    console.log(chalk.bgGray.red(`your obtained percentage is ${obtainedPercentage}% sorry you are Fail`))
}
