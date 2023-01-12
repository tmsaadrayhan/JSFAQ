function doSomething() {
    console.log(1);
}
console.log(0);
setTimeout(doSomething, 1000);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
var count= 1;

function sec(){
    count++;
    console.log(count);
}
setInterval(sec, 1000)