let myName = '  Kimbo DeMille '

console.log(myName.length)

console.log(myName.toUpperCase())

console.log(myName.toLowerCase())

let password = 'abc123asdf098'
console.log(password.includes('password'))

console.log(myName.trim())

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))