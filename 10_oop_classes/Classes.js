//  ES6

class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User('cricket', 'cricket@gmail.com', '214235')

console.log(chai.encryptPassword());
