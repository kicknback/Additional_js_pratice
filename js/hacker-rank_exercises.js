(function(){
    "use strict";

    // const num = 45;
    // const longFactorial = (num) => {
    //     var bigInt = BigInt(num);
    //     var factorial = 1n;
    //     for (let i = 0n; i < bigInt ; i++) {
    //         factorial *= bigInt − i;
    //     }
    //     return String(factorial);
    // }
    //console.log(longFactorial(45));

    // let factorialFun = num => {
    //     let total = 1;
    //     for (let i = 1; i <= num; i++) {
    //         total *= i;
    //     }
    //     return total;
    // }

    let factorialFun = n => {
        let total = 1n;
        let num1 = BigInt(n)
        for (let i = 1n; i <= num1; i++) {
            total *= i;
        }
        return total;
    }



    console.log(factorialFun(26));


})()