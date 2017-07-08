class User {
  constructor(options) {
    this.username = options.username;
    this.password = options.password;
  }
  checkPassword(str) {
    return str === this.password;
  }
}

const me = new User({ username: 'LambdaSchool', password: 'pass' });
const result = me.checkPassword('pass');
const checkPassword = function comparePasswords(passwordToCompare) {
  return this.password === passwordToCompare;
};

checkPassword.call(me, 'pass');
checkPassword.apply(me, ['pass']);
const cp = checkPassword.bind(me);
cp('pass');
