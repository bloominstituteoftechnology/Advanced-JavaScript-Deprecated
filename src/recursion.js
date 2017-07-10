// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 1,   2,   3,   5,   8,   13,  21,  34,  etc... (Fibbonacci values)
  // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, etc... [position, nth Fibbo #]
  // version 1
  if (n < 2) return 1; // <--------------------------- ***BASE CASE***
  return nFibonacci(n - 2) + nFibonacci(n - 1); // <--- recursive call

  // version 1.1 - ternary
  // return (n < 2) ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);

  // version 2 - non-recursive
  // const fibArray = [1, 1];
  // for (let i = 2; i <= n; i++) {
  //   fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  // }
  // return fibArray[n];
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // version 1 √
  // if (n === 1) return n;
  // return n * nFactorial(n - 1);

  // version 2: ternary solution √
  // declare variableName = ifCondition ? thenThis : otherwiseThat;
  // const factorial = (n === 1) ? 1 : n * nFactorial(n - 1);
  // return factorial;

  // version 2.1 √
  return (n === 1) ? n : n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // const array = Object.keys(obj);
  // const anObject = {x: 4, y: 6, z: 7};
  // UGH!!!!!!!!!!!!!
  // const tree1 = {
  //   x: 1,
  //   y: 1,
  //   z: 1,
  //   xa: {
  //     xx: 1,
  //     xy: 1,
  //     xz: 1,
  //     zz: {
  //       a: {
  //         b: {
  //           z: 1,
  //         },
  //       },
  //     },
  //   },
  //   };
  //
  // const keys = (obj) => {
  //   return Object.keys(obj);
  // };
  //
  // const values = (obj) => {
  //   return Object.values(obj);
  // };
  //
  // const pairs = (obj) => {
  //   const keyArr = keys(obj);
  //   const valArr = values(obj);
  //   const pairArr = [];
  //   for (let i = 0; i < keyArr.length; i++) {
  //     pairArr.push([]);
  //   }
  //   for (let i = 0; i < keyArr.length; i++) {
  //     pairArr[i].push(keyArr[i]);
  //     pairArr[i].push(valArr[i]);
  //   }
  //   return pairArr;
  // };
  //
  // const recursivePairs = (obj) => {
  //   for (let i = 0; i < obj.length; i++) {
  //     pairs[i]
  //   }
  // };
  //
  // const flatten = (elements) => {
  //   let flat = [];
  //   for (let i = 0; i < elements.length; i++) {
  //     if (Array.isArray(elements[i])) {
  //       flat = flat.concat(flatten(elements[i]));
  //     } else {
  //       flat.push(elements[i]);
  //     }
  //   }
  //   return flat;
  // };
  //
  // // const flatObj = pairs(anObject)
  // // console.log(flatObj);
  //
  // const flatTree = pairs(tree1)
  // console.log(flatTree);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
