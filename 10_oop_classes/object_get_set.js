const User = {
    _email: 'merchant@gmail.com',
    _password: 'abc123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const danedar = Object.create(User)
console.log(danedar.email);
