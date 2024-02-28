const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = [
	{
		type: "input",
		name: "managerName",
		message: "Enter the team manager's name:",
		default: "John Appleseed",
	},
	{
		type: "input",
		name: "managerID",
		message: "Enter the team manager's employee ID:",
		default: "202",
	},
	{
		type: "input",
		name: "managerEmail",
		message: "Enter the team manager's email address:",
		default: "john.appleseed@gmail.com",
	},
	{
		type: "input",
		name: "managerOfficeNumber",
		message: "Enter the team manager's office number:",
		default: "41",
	},
];


const addTeamMenuQuestions = [
	{
		type: "list",
		name: "optionsMenu",
		message: "Please select an option:",
		choices: ["Add an engineer.", "Add an intern.", "Finish building the team.", "Exit the application."],
	},
];

const engineerQuestions = [
	{
		type: "input",
		name: "engineerName",
		message: "Enter the engineer's name:",
		default: "John Appleseed",
	},
	{
		type: "input",
		name: "engineerID",
		message: "Enter the engineer's employee ID:",
		default: "202",
	},
	{
		type: "input",
		name: "engineerEmail",
		message: "Enter the engineer's email address:",
		default: "john.appleseed@gmail.com",
	},
	{
		type: "input",
		name: "engineerGithub",
		message: "Enter the engineer's GitHub link:",
		default: "https://github.com/johnAppleseed",
	},
];

const internQuestions = [
	{
		type: "input",
		name: "internName",
		message: "Enter the intern's name:",
		default: "John Appleseed",
	},
	{
		type: "input",
		name: "internID",
		message: "Enter the intern's employee ID:",
		default: "202",
	},
	{
		type: "input",
		name: "internEmail",
		message: "Enter the intern's email address:",
		default: "john.appleseed@gmail.com",
	},
	{
		type: "input",
		name: "internSchool",
		message: "Enter the intern's school:",
		default: "UCLA",
	},
];

const employeeQuestions = [
	{
		type: "input",
		name: "employeeName",
		message: "Enter the employee's name:",
		default: "John Appleseed",
	},
	{
		type: "input",
		name: "employeeID",
		message: "Enter the employee's employee ID:",
		default: "202",
	},
	{
		type: "input",
		name: "employeeEmail",
		message: "Enter the employee's email address:",
		default: "john.appleseed@gmail.com",
	},
];

const managerAnswers = [];
const engineerAnswers = [];
const internAnswers = [];
const employeeAnswers = [];

const mainMenu = () => {
	inquirer.prompt(managerQuestions).then((answers) => {
		managerAnswers.push(answers);
		inquirer.prompt(addTeamMenuQuestions).then((answers) => {
			console.log("\n");
			console.log(answers.optionsMenu);
			if (answers.optionsMenu == "Add an engineer.") {
				//  TODO: When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
				inquirer.prompt(engineerQuestions).then((answers) => {engineerAnswers.push(answers);})
				mainMenu();
			} else if (answers.optionsMenu == "Add an intern.") {
				//  TODO: When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
				inquirer.prompt(internQuestions).then((answers) => {internAnswers.push(answers)})
				mainMenu();
			} else if (answers.optionsMenu == "Finish building the team.") {
				inquirer.prompt(employeeQuestions).then((answers) => {employeeAnswers.push(answers)})
				mainMenu();
			} else if (answers.optionsMenu == "Exit the application."){};
		});	
	});
}





//  TODO: When a user decides to finish building their team then they exit the application, and the HTML is generated.