// myarr=[0,1,2,3,4,5]
// console.log(myarr[0]);
// //array methods
// myarr.push(6)
// console.log(myarr);
// //slice and splice
// x=myarr.slice(1,3)
// console.log(x);
// y=myarr.splice(1,4)
// console.log(y);
// console.log(myarr);


// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);



// **************************** vs ************************************
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



// note: splice le original array laai nai change garidinxa. And splice(1, 3) gives --> 1, 2, 3
//       slice le original array laai change gardaina. And slice(1, 3) gives --> 1, 2