// TODO: Write code to define and export the Employee class

class Employee {
	// constructor
	constructor (name, email) {
		this.name = name;
		this.email = email;
		Employee.id ++;
		this.id = Employee.id
	};
	// method
	getName() {
		return this.name;
	};
	getId() {
		return this.id;
	};
	getEmail() {
		return this.email;
	};
	getRole() {
		return "Employee";
	};
}
Employee.id = 0 

module.exports = Employee;