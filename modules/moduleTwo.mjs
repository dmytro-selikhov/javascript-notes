//moduleTwo.js
// import printMyName from './moduleOne.js';
// printMyName(); // Dima


import {
sum,
mult as multNumbers
} from './moduleOne.mjs';

const res1 = sum(10, 2);
console.log(res1);


const res2 = multNumbers(-2, 17);
console.log(res2);