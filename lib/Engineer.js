// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
	// constructor
	constructor(name, id, email, gituser) {
		// super
		super(name, id, email);
		this.github = gituser;
	}
	getRole() {
		return "Engineer";
	}
	getGitHub() {
		return this.github;
	}
}

module.exports = Engineer;