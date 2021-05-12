(function(){
    "use strict";

    // Create a function which returns the number of true values there are in an array.
    //
    //     Examples
    // countTrue([true, false, false, true, false]) ➞ 2
    //
    // countTrue([false, false, false, false]) ➞ 0
    //
    // countTrue([]) ➞ 0
    // Notes
    // Return 0 if given an empty array.
    //     All array items are of the type bool (true or false).

    let countTrue = arr => {
        if (arr.length === 0) {
            return 0;
        }
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === true) {
               counter += 1;
            }
        }
        return counter;
    }

    // Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
    //
    // Examples
    // addName({}, "Brutus", 300) ➞ { Brutus: 300 }
    //
    // addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
    //
    // addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
    // Notes
    // The value argument will be a number.

    let addName = (obj, name, value) => {
        obj[name] = value;
        return obj;
    }

    // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
    //
    // Examples
    // addUp(4) ➞ 10
    //
    // addUp(13) ➞ 91
    //
    // addUp(600) ➞ 180300
    // Notes
    // Expect any positive number between 1 and 1000.

    let addUp = num => {
        let total = 0;
        for (let i = num; i >= 0; i--) {
            total += i;
        }
        return total;
    }

})()