// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
	// constructor
	constructor(name, email, github) {
		// super
		this.name = name;
		this.email = email;
		super(name, email);

		this.github = github;
	}
	getRole() {
		return "Engineer";
	}
	getGitHub() {
		return this.github;
	}
}