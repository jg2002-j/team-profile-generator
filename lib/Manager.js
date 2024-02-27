// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
	// constructor
	constructor(name, id, email, offno) {
		// super
		super(name, id, email);
		this.officeNumber = offno;
	}
	getRole() {
		return "Manager";
	}
	getOffice() {
		return this.officeNumber;
	}
}

module.exports = Manager;