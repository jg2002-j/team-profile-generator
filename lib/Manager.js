// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
	// constructor
	constructor(name, email, officeNumber) {
		// super
		this.name = name;
		this.email = email;
		super(name, email);

		this.officeNumber = officeNumber;
	}
	getRole() {
		return "Engineer";
	}
}