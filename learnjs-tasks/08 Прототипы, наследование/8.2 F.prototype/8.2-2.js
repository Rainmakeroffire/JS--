// работает корректно
function Employee(position) {
    this.position = position;
}

let employee1 = new Employee('lawyer');
let employee2 = new employee1.constructor('economist');

console.log(employee2.position);


// получим udefined
function Employee(position) {
    this.position = position;
}

Employee.prototype = {};

let employee1 = new Employee('lawyer');
let employee2 = new employee1.constructor('economist');

console.log(employee2.position);