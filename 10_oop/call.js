function SetUserName(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const coffee = new createUser("coffee", "coffee@gamil.com", "12345");

console.log(coffee);
