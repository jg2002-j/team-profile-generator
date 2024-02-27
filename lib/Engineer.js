// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
	// constructor
	constructor(name, id, email, github) {
		// super
		this.name = name;
		this.id = id;
		this.email = email;
		super(name, id, email);

		this.github = github;
	}
	getRole() {
		return "Engineer";
	}
	getGitHub() {
		return this.github;
	}
}