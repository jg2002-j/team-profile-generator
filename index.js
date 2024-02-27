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

const questions = [
// 	* When a user starts the application then they are prompted to enter the **team manager**’s:
{
	// 	* Name
	type: "input",
	name: "managerName",
	message: "Enter the team manager's name:",
	default: "John Appleseed",
	filter: String,
},
{
	// 	* Employee ID
	type: "input",
	name: "managerID",
	message: "Enter the team manager's employee ID:",
	default: "202",
	validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number.";
	},
	filter: Number,
},
	// 	* Email address
	// 	* Office number


//  * When a user enters those requirements then the user is presented with a menu with the option to:
	// 	* Add an engineer
	// 	* Add an intern 
	// 	* Finish building the team
//  * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
	// 	* Engineer's Name
	// 	* ID
	// 	* Email
	// 	* GitHub username
//  * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
	// 	* Intern’s name
	// 	* ID
	// 	* Email
	// 	* School
//  * When a user decides to finish building their team then they exit the application, and the HTML is generated.
];

inquirer
  .prompt(questions)
  .then((answers) => {
    	// Use user feedback for... whatever!!
  })
  .catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
  });