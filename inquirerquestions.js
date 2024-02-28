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
		choices: ["Add an engineer.", "Add an intern.", "Finish building the team."],
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

module.exports = {
	managerQuestions: managerQuestions,
	addTeamMenuQuestions: addTeamMenuQuestions,
	engineerQuestions: engineerQuestions,
	internQuestions: internQuestions,
	employeeQuestions: employeeQuestions,
}