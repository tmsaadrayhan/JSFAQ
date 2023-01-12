function addNumbers(num1, num2){
    console.log(arguments);
    var sum= 0;
    for (let index = 0; index < arguments.length; index++) {
        sum+= arguments[index];
    }
    return sum;
}
var result= addNumbers(1, 2, 3, 4, 5);
console.log(result);