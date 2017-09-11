recursion = require('./src/recursion.js');

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
        },
      },
    },
  },
};
const tree2 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 2,
        },
      },
    },
  },
  r: 1,
};



console.log(recursion.checkMatchingLeaves(tree1));
