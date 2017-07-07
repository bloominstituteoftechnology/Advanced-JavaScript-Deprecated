// test data
const testOBJ = {
  a: 1,
  b: 2,
};

const invert = (obj) => {
  const newObj = {};
  keys(obj).forEach(key => newObj[ obj[ key] ] = key);
  return newObj;
};

console.log(invert(testOBJ))
