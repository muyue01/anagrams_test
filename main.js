// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));

function isLeapYear(Year){
    if((Year % 4 == 0)  && (Year % 100) != 0 || (Year % 400 == 0)){
        return true
    }else{
        return false
    }
}
console.log(isLeapYear(2000))
console.log(isLeapYear(2001))
console.log("hello world");

const fibonacci = require('./lib/fibonacci')
for(var j = 1;j < 10;j++){
    console.log(fibonacci(j))
}
