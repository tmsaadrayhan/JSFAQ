const myObj= {
    name: "kussus ali",
    getFullName: function() {
        console.log(this);
        return "Mr, "+ this.name; 
    }
}
const anotherObj= {
    name: "biddut ali",
    
}

anotherObj.getFullName= myObj.getFullName;
console.log(anotherObj.getFullName);
anotherObj.getFullName()

myObj.getFullName();


function add (a, b) {
    console.log(this);
    return a + b;
}

add(12, 13);

anotherObj.sum= add;
anotherObj.sum();
