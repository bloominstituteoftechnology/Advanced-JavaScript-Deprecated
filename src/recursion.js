// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      const s = nFibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  
  return n * nFactorial(n - 1);
};
console.log(nFactorial(10));

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let value;
  let allMatch = true;

  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof key !== 'object') {
        value = object[key];
        return undefined;
      }
      if (typeof object[key] === 'object') {
        return checkLeaves(object[key]);
      }
      if (object[key] !== value) {
        allMatch = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return allMatch;
};
console.log(checkMatchingLeaves(myObj1 = {title:true, name:true, email:false}))
/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
