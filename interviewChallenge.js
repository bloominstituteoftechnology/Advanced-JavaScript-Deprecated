// const flatten = (elements) => {
//   // Flattens a nested array (the nesting can be to any depth).
//   // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
//   const flat = [].concat(elements)
//   flat.(Array.isArray) ? flatten(flat) : flat;
//  elements.forEach((element) => {
//      if (Array.isArray(element) {
//          smush it
//          add it to a new array 'container'
//      })
//      return the container
//  })

// };

// flatten([1, [2], [3, [[4]]]]);
const flatten = (elements) => {
  const results = [];

  elements.forEach(element => {
    if(Array.isArray(element)){
      const nested = flatten(element);
      nested.forEach(newElement => {
        results.push(newElement);
      })
    }
    else{
      results.push(element);
    }
  })
  return results;
}

console.log(flatten([1, [2], [3, [[4]]]]));
describe('flatten', () => {
  it('should return an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const results = arrayMethods.flatten(arr);
    expect(Array.isArray(results)).toBe(true);
  });
  it('should return a flattened array when given a nested array', () => {
    const arr = [1, 2, 3, 4, 5, [6], [7]];
    const results = arrayMethods.flatten(arr);
    expect(Array.isArray(results)).toBe(true);
    expect(results).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('should return a flattened array regardless of how deep the array nesting is', () => {
    const arr = [1, [2], [[3]], [[[4]]]];
    const results = arrayMethods.flatten(arr);
    expect(results).toEqual([1, 2, 3, 4]);
  });
});


Array.isArray(element)
