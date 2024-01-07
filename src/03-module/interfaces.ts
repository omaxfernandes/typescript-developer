interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
};


let employee: Employee = {
    firstName: "Max",
    lastName: "Santos",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};


// employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'



// employee.firstName = "Fernando";


console.log(employee.fullName());