/*
// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
   const arr = [];
 
   for (let i = 0; i < elements.length; i++) {
     arr[i] = cb(elements[i]);
   }
 
   return arr;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  let reduced = (memo === undefined) ? elements.shift() : memo;
 
   for (let i = 0; i < elements.length; i++) {
     reduced += elements[i];
   }
 
   return reduced;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let i = 0; i < elements.length; i++) {
     if (cb(elements[i])) {
       return elements[i];
     }
   }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const filtered = [];

   for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
       filtered.push(elements[i]);
     }
   }

   return filtered;

};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
     onst flattener = (els, arr) => {
       const newArray=[];
       elements.forEach(elements)=>{
          if(Array.isArray(element)=>{
            const nestedArray=flatten(element);
            nestedArray.forEach(nestedElement)=>{
                
            }
              
          } else{
              newArray.push(element);
          }
           
           
       }
  };
  return newArray;
};

   

/*
module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};

*/
