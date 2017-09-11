// class User {
//   constructor(options) {
//     this.email = options.email;
//     this.password = options.password;
//   }

//   comparePasswords(givenPassword) {
//     return givenPassword === this.password;
//   }
// }

// const nFibonacci = (n) => {
//   // fibonacci sequence: 1 2 3 5 8 13 ...
//   // return the nth number in the sequence
//   return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2)
// };
// const nFactorial = (n) => {
//   // factorial example: !5 = 5 * 4 * 3 * 2 * 1
//   // return the factorial of `n`
//   return n < 2 ? n : n * nFactorial(n-1)
// };
// console.log(nFactorial(3));

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  let count = 0;
  const newCounter = () => {
    count++;
    return count;
  };
  return newCounter;
  // const increment = () => count++;
  // return increment();
  // newCounter(); // 1
  // newCounter(); // 2
};

newCounter = counter;
console.log(newCounter);
console.log(newCounter);

// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
//   let counter = 0;
//   const increment = () => {
//     counter++;
//     return counter;
//   }
//   const decrement = () => {
//     counter--;
//     return counter;
//   }
// };

// const c = counterFactory();



// const newObj = {};
// const obj = {"hello":5,"cake":"good"};

// Object.keys(obj).forEach((currentKey) => {
//     // console.log(currentKey, obj[currentKey]);
//     newObj[obj[currentKey]] = currentKey;
// });

// const a = {
//   x: 'hi',
// };
// const b = {
//   banana: true,
//   bubblegum: false,
// };

// const defaults = (obj, defaultProps) => {
//   // Fill in undefined properties that match properties on the `defaultProps` parameter object.
//   // Return `obj`.
//   // http://underscorejs.org/#defaults
//   // const defaultPropKeys = keys(defaultProps);
//   // const objectKeys = keys(obj);

//   // objectKeys.forEach((key) => {
//   //   if (defaultPropKeys.includes(key)) {
//   //     obj[key] = defaultProps[key];
//   //   }
//   // });
//   // return obj;
//   return Object.assign({}, obj, defaultProps);
// };

// console.log(defaults(a,b));
// function reverseCase(str) {
//   let newStr = '';
//   str.split("").forEach((c) => {
//     if (c === c.toUpperCase()) {
//       newStr += c.toLowerCase();
//     }
//         if (c === c.toLowerCase()) {
//       newStr += c.toUpperCase();
//     }
//   });
//   return newStr;
// }

// function reverseCase(str) {
//   return str.split("").forEach((c) => {
//     if (c === c.toUpperCase()) {
//       // newStr += c.toLowerCase();
//       return c.toLowerCase();
//     }
//  if (c === c.toLowerCase()) {
//       // newStr += c.toUpperCase();
//       return c.toUpperCase();
//     }
//   }).join('');
// }

// function reverseCase(str) {
//   return str.split("").map((c) => {
//     if (c === c.toUpperCase()) {
//       return c.toLowerCase();
//     }
//  if (c === c.toLowerCase()) {
//       return c.toUpperCase();
//     }
//   }).join('');
// }


// console.log(reverseCase("HelloWorld"));
// 'hELLO  wORLD' to be 'hELLO wORLD'

// function evenOccurrence(arr) {
//   const occurs = {};
//   arr.forEach((num) => {
//     if (Object.keys(occurs).includes(num.toString())) {
//       occurs[num] = occurs[num] + 1;
//     }
//     else {
//       occurs[num] = 1;
//     }
//   });

//   Object.keys(occurs).forEach((key) => {
//     if (occurs[key] % 2 === 0) {
//       return parseInt(key);
//     }
//     return null;
//   })
// }

// console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))

