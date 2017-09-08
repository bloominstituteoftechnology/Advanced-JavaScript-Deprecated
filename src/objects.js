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
  // http://underscorejs.org/#

  const objKeys = Object.keys(obj);
  const result = [];

  objKeys.forEach((k) => {
    return result.push(obj[k]);
  });

  // for (const key in obj) {
  //   if (Object.prototype.hasOwnProperty.call(obj, key)) {
  //     result.push(obj[key]);
  //   }
  // }
  return result;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const objKeys = Object.keys(obj);
  const returnObj = Object.assign({}, obj);

  objKeys.forEach((k) => {
    returnObj[k] = cb(obj[k]);
  });

  return returnObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const objKeys = Object.keys(obj);
  const result = [];

  objKeys.forEach((k) => {
    result.push([k, obj[k]]);
  });

  return result;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objKeys = Object.keys(obj);
  const returnObj = {};

  objKeys.forEach((k) => {
    returnObj[obj[k]] = k;
  });

  return returnObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  function hasKey(o, ky) {
    // const objKeys = Object.keys(o);
    // return objKeys.includes(ky) || o[ky] !== undefined;
    return o[ky] === undefined;
  }

  const defaultKeys = Object.keys(defaultProps);

  defaultKeys.forEach((k) => {
    if (hasKey(obj, k)) {
      obj[k] = defaultProps[k];
    }
  });

  // for (const key in objKeys) {
  //   if (obj[key] === undefined && defaultProps.hasKey(key)) {
  //     obj[key] = defaultProps[key];
  //   }
  // }
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
