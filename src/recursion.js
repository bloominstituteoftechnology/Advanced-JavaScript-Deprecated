// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const obs = [obj];
  let check;
  let flag = true;
  const helper = (o) => {
    const vals = Object.values(o);
    for (let i = 0; i < vals.length; i++) {
      if (typeof vals[i] !== 'object' && !check) check = vals[i];
      if (typeof vals[i] !== 'object' && check !== vals[i]) return flag = false;
      if (typeof vals[i] === 'object') obs.push(vals[i]);
    }
  };
  for (let i = 0; i < obs.length; i++) {
    helper(obs[i]);
  }
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
