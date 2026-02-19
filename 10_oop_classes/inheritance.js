class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email,
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added ${this.username}`);
    }
}

const coffee = new Teacher('coffee', 'coffee@gmail.com', '32523')

coffee.addCourse()

const blackCoffee = new User('black coffee')

blackCoffee.logMe()

console.log(coffee === blackCoffee);
console.log(coffee instanceof Teacher);
