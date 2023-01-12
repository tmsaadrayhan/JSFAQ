const normalPerson= {
    firstName: "jashim",
    lastName: "uddin",
    salary: 14000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    changeBill: function(amount, tax){
        this.salary-=(amount+tax);
        return this.salary
    }
}
normalPerson.changeBill(150);
console.log(normalPerson);

const heroPerson= {
    firstName: "hero",
    lastName: "balam",
    salary: 25000,
}
const friendlyPerson= {
    firstName: "hero",
    lastName: "golam",
    salary: 25000,
}

normalPerson.changeBill.bind(heroPerson)(200, 20);
console.log(heroPerson.salary);

normalPerson.changeBill.call(heroPerson, 100, 10)
normalPerson.changeBill.call(friendlyPerson, 300, 30)
console.log(heroPerson.salary);
console.log(friendlyPerson.salary);

normalPerson.changeBill.apply(friendlyPerson, [300, 30])
console.log(friendlyPerson.salary);




