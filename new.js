class Person {
    constructor(firstName, lastName, salary) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.salary= salary;
    }
}

const heroPerson= new Person("hero", "balam", 25000);
const friendlyPerson= new Person("hero", "golam", 25000);
console.log(heroPerson);
console.log(friendlyPerson);
