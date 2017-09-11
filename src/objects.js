// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const objKeys = Object.keys(obj);
  const resultArr = [];
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] == null) {
      resultArr.push(null);
    } else {
      resultArr.push(String(obj[objKeys[i]]));
    }
  }
  return resultArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const result = {};
  // loop over the elements
  const objKeys = Object.keys(obj);
  objKeys.forEach((item) => {
    result[item] = cb(obj[item]);
  });
  return result;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const objKeys = Object.keys(obj);
  const pairArr = [];
  objKeys.forEach((item) => {
    pairArr.push([item, obj[item]]);
  });
  return pairArr;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objKeys = Object.keys(obj);
  const invObj = {};
  objKeys.forEach((item) => {
    invObj[obj[item]] = item;
  });
  return invObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = Object.keys(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
      obj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
