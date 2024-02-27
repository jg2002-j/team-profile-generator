// TODO: Write code to define and export the Employee class

class Employee {
	// constructor
	constructor (name, email) {
		this.name = name;
		this.email = email;
		id ++;
	};
	// method
	getName() {
		console.log(this.name)
	};
	getId() {
		console.log(this.id)
	};
	getEmail() {
		console.log(this.email)
	};
	getRole() {
		console.log("Employee")
	};
}
Employee.id = 0 