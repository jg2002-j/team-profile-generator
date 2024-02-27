// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
	// constructor
	constructor(name, email, school) {
		// super
		this.name = name;
		this.email = email;
		super(name, email);

		this.school = school;
	}
	getRole() {
		return "Intern";
	}
	getSchool() {
		return this.school;
	}
}