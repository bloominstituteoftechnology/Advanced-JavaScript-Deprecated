// Complete the following functions.

/* eslint-disable no-unused-vars */

const nFibonacci = n => ((n > 1) ? (nFibonacci(n - 2) + nFibonacci(n - 1)) : 1);
  // {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // return nFibonacci( n - 2 ) + nFibonacci( n - 1 );
  // };

const nFactorial = n => ((n > 1) ? n * nFactorial(n - 1) : 1);
  // {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // };

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // const newArray = Object.keys(obj).forEach((acc, val) => acc.concat(obj[keys].hasOwnProperty),[]);
  const queue = Object.keys(tree).map(item => return tree[item]);
  const key = queue[0];
  let value;
  while (queue.length) {
    value = queue.shift();
    if (typeof value !== 'number') {
      let sub = Object.keys(value);
      let subarr = sub.map(key => sub[key]);
      queue.concat(subarr);
      continue;
    }
    if (value !== )
  }
  return true;
  // Object.keys(obj).forEach(key => box.push(typeof obj[key] === 'object' ? checkMatchingLeaves(obj[key]) : obj[key]));
  // console.log(box);
  // return (box.reduce((acc, val) => acc + val) % box.length === 0);
  /*
  const deforestation = obj2 => Object.keys(obj2).forEach(key => box.push(typeof obj2[key] === 'object' ? deforestation(obj2[key]) : obj2[key]));
  deforestation(obj);
  const theOne = box[0];
  let answer = true;
  box.forEach((val) => {
    if (typeof box[val] === 'undefined') box.splice(val, 1);
  });
  box.forEach((val) => {
    if (!(theOne === box[val])) answer = false;
  });
  return answer;
  // answer from Ben
  */
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
