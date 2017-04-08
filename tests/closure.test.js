const closureMethods = require('../src/closure');
/* eslint-disable no-undef */
describe('closure', () => {
  it('should return true from test function', () => {
    expect(closureMethods.test()).toBe(false);
  });
});
