// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// This is a demo task.
//
//     Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
//     For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
//     N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const sortA = A.sort((a, b) => a - b);
//     return sortA.forEach((current, index) => {
//         if (Math.sign(current) === -1) {
//             return;
//         }
//         if (index + 1 !== current - 1) {
//             return current;
//         }
//     })
// }
//
// const isAllNeg = (arr) => {
//
// }
//
//
// let arrA = [1, 3, 6, 4, 1, 2];
// let arrB = [2, 8, 4, 9, 5, 9];
// let arrC = [-1, 3, 4, 6, 6, 19];
// let arrD = [-124, -143, -135, -325, 89,];
//
//
//
// solution(arrA);
//
// ////////////////////////
//
//
// function solution(X) {
//     // write your code in JavaScript (Node.js 8.9.4)
//
// }







// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//    let weightToFill = 5000- A.shift();
//    const sortA = A.sort((a, b) => a - b);
//    let appleCount = 0;
//     sortA.forEach(apple => {
//         if (apple  <= weightToFill) {
//             weightToFill -= apple;
//             appleCount++
//         }
//     })
//     return appleCount;
// }
//
//
// let arr1 = [4650, 150, 150, 150];
//
// let arr = [4850, 100, 30, 30, 100, 50, 100];
//
// let arr2 = [2590, 3, 4, 64, 23, 65, 12, 15, 24, 65, 100, 82, 43];
//
// console.log(solution(arr2));
//
//





function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
}






///////////////////////////


























