const accountId = 43223;
let accountEmail = "hassan12@gmail.com";
var accountPassword = "32442";
accountCity = "Karachi";
let accountState;

// accountId = 2 // not allowed
accountEmail = "merchant@gmail.com";
accountPassword = "21423";
accountCity = "Buttkhaila";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);
