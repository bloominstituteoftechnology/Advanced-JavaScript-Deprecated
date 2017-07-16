// Complete the following functions.
const nFibonacci = (n) => {
	if (n <= 1) {
		return 1
	}
	return n * nFibonacci(n-1);
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}; 

const nFactorial = (n) => {
	if (n <= 1) {
		return true;
	}
	return nFactorial(n - 1) + nFactorial(n-2);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
