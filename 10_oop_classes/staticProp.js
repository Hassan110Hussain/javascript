class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username: ${this.username}`);
  }
  static createId() {
    return `123343`;
  }
}

const hassan = new User("hassan");
// console.log(hassan.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iPhoneX", "iphone@gmail.com");
console.log(iPhone.createId());
