// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n > 0) {
    return n * nFactorial(n - 1);
  }
  return 1;
};

/* Extra Credit */

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let level = 0;
  let counter = 0;

  function hasNoObject(someObject) {
    Object.values(someObject).forEach((val) => {
      if (typeof val === 'object') {
        // console.log(`Check: Object found in values. (@ depth level:${level})`);
        return false;
      }
    });
    // console.log(`Check: No object found in values. (@ depth level:${level})`);
    return true;
    // ~~~~~~~~WHYYY!!!!!! Does this happen!!!!!!~~~~~
  }

  function isObjKeysLengthOne(someObject) {
    if (Object.keys(someObject).length === 1) {
      // console.log(`Check: Object has only one key.`);
      return true;
    }
    // console.log(`Check: Object has multiple keys.`);
    return false;
  }

  function getUniqueAsArray(arr) {
    const set1 = new Set(arr);
    const arr1 = [...set1];
    return arr1;
  }

  function getNonObjectValuesAsArray(someObject, valuesArray = []) {
    Object.values(someObject).forEach((val) => {
      if (typeof val !== 'object') {
        valuesArray.push(val);
      }
    });
    return valuesArray;
  }

  function getLeafNodeValuesAsArray(someObject, valuesArray = []) {
    let objCount = 0;
    let valCount = 0;

    // console.log(`Evaluating object at depth level ${level}.`);
    // console.log(`Raw property values (@ depth level:${level}): ${Object.values(someObject)}`);

    let savedLevel = 0;
    let savedLevel2 = 0;

    Object.values(someObject).forEach((val) => {
      if (typeof val !== 'object') {
        counter++;
        savedLevel = level;
        // console.log(`Action ${counter} - Value found @ depth level ${savedLevel}`);
        valCount++;
        valuesArray.push(val);
      } else {
        counter++;
        savedLevel2 = level;
        // console.log(`Action ${counter} - Object found @ depth level ${savedLevel2}`);
        objCount++;
        level++;
        valuesArray = getLeafNodeValuesAsArray(val, valuesArray);
        level--;
      }
    });
    // console.log(`Status: @ Depth Level ${level} - ${objCount} object(s),  ${valCount} value(s) found on object #${objCount}`);
    // console.log('');
    return valuesArray;
  }

  function checkValuesForEquality(arr) {
    const sameTest = getUniqueAsArray(arr).length === 1;
    // console.log(`Check: Are values same? Result: ${sameTest}`);
    return sameTest;
  }

  if (isObjKeysLengthOne(obj)) {
    if (hasNoObject(obj)) {
      // console.log("Category 1 ----");
      return checkValuesForEquality(getLeafNodeValuesAsArray(obj));
    }
    // console.log("Category 2 ----");
    return true;
  }
  if (hasNoObject(obj)) {
    // console.log("Category 3 ----");
    const r = getLeafNodeValuesAsArray(obj);
    // console.log('Leaf Values found: ' + r.length);
    // console.log(r);
    return checkValuesForEquality(r);
  }
  // console.log("Category 4 ----");
  const r = getLeafNodeValuesAsArray(obj);
  // console.log('Leaf Values found: ' + r.length);
  // console.log(r);
  return checkValuesForEquality(r);

};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
