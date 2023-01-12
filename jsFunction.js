function evenOdd(num){
    if(num%2==0){
        console.log(num+ " is an even number");
    }
    else{
        console.log(num+ " is an odd number");
    }
}
function divisibleByFive(num){
    if(num%5==0){
        return num+ " is divisible by five";
    }
    else{
        return num+ " not is divisible by five";
    }
}

num1 = [5, 12, 89, 45, 18, 8];
loop(num1);

num2 = [15, 16, 55, 60, 33, 40];
loop(num2);

function loop(array){
    for (let index = 0; index < array.length; index++) {
        evenOdd(array[index]);
    }
}
evenOdd(10);

console.log(divisibleByFive(10));
console.log(divisibleByFive(12));
