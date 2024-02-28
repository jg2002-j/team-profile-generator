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

// TODO: turn all responses into objects in an array using the classes

const employeeObjects = [];

const turnManagersintoObjects = () => {
	managerAnswers.forEach(response => {
		employeeObjects.push(new Manager (response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber));
	});
}

const turnEngineersintoObjects = () => {
	engineerAnswers.forEach(response => {
		employeeObjects.push(new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub));
	});
}

const turnInternsintoObjects = () => {
	internAnswers.forEach(response => {
		employeeObjects.push(new Intern (response.internName, response.internID, response.internEmail, response.internSchool));
	});
}

const endAnswers = () => {
	turnManagersintoObjects();
	turnEngineersintoObjects();
	turnInternsintoObjects();

	// TODO: Call the `render` function (provided for you) and pass in an array containing all employee objects;
	const htmlData = render(employeeObjects)
	// TODO: Create an HTML file using the HTML returned from the `render` function.
	// TODO: Write it to a file named `team.html` in the `output` folder. You can use the provided variable `outputPath` to target this location.
	fs.writeFile(outputPath, htmlData, (error) =>
		error ? console.error(err) : console.log(`Success: answers written to ${outputPath}`)
 	);
};

const mainMenu = () => {
	inquirer.prompt(inquirerquestions.addTeamMenuQuestions).then((answers) => {
		console.log("\n");
		console.log(`==== ${answers.optionsMenu} ====`);
		if (answers.optionsMenu == "Add an engineer.") {
			//  TODO: When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
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

