const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const inquirerquestions = require("./inquirerquestions.js")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerAnswers = [];
const engineerAnswers = [];
const internAnswers = [];

const endAnswers = () => {
	console.log("Manager Answers:");
	console.log(managerAnswers);
	console.log("Engineer Answers:");
	console.log(engineerAnswers);
	console.log("Intern Answers:");
	console.log(internAnswers);
};

const mainMenu = () => {
	inquirer.prompt(inquirerquestions.addTeamMenuQuestions).then((answers) => {
		console.log("\n");
		console.log(`==== ${answers.optionsMenu} ====`);
		if (answers.optionsMenu == "Add an engineer.") {
			//  TODO: When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
			inquirer.prompt(inquirerquestions.engineerQuestions).then((answers) => {
				engineerAnswers.push(answers);
				mainMenu();
			})
		} else if (answers.optionsMenu == "Add an intern.") {
			//  TODO: When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
			inquirer.prompt(inquirerquestions.internQuestions).then((answers) => {
				internAnswers.push(answers);
				mainMenu();
			})
		} else if (answers.optionsMenu == "Finish building the team."){
			//  TODO: When a user decides to finish building their team then they exit the application, and the HTML is generated.
			endAnswers();
		};
	});
};

inquirer.prompt(inquirerquestions.managerQuestions).then((answers) => {
	managerAnswers.push(answers);
	console.log(`==== ====`)
	mainMenu();
});

