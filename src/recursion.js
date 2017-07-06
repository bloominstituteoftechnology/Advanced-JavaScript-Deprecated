// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if ( n === 1) {
    return n;
  }
  return n * nFactorial(n - 1)
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const trees = Object.keys(obj);
  let numberToCompare = 1;
  //find first number and store it to zebra
  //for(let j = 0; j < obj.length; j++) {
    //if(typeof obj[j] === 'number' && Number.isNaN(obj[j]) === false) {
      //numberToCompare = obj[j];
      //}
    //}
  //new function check
  function check(thingToCheck) {
    //is null?
    if(thingToCheck === null) {
      return false;
    }
    //is number?
    if(Number.isNaN(thingToCheck) === true) {
        return false;
      }
    if(typeof thingToCheck !== 'number') {
    //is object?
      if(typeof thingToCheck !== "object") {
        return false;
      }
    //has children?
      if(thingToCheck.detectChildNodesHere){
      //how many children?
      //for stuff in thingToCheck ---> check(stuff)
        for(let i = 0; i < obj[thingToCheck].length; i++) {
          check(k);
        }
        return false;
      }
    }
    if(thingToCheck !== numberToCompare) {
      return false;
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
