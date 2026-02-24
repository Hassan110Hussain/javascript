class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hassan`;
  }

  set password(value) {
    this._password = value;
  }
}

const hassan = new User("hassan@gmail.com", "123354");
console.log(hassan.email);
