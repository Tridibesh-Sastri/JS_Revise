const accountId = 144553
let accoutnEmail = "tridibeshs30@gmail.com" //block scoped
var accountPassword = "random@123" // no scoping
accountCity = "Rajasthan"
let accountState

// accountId = 4234234

/*
Don't use var in modern codes as it is
not scoped so all variables are globally scoped
*/

accoutnEmail = "rohit@gmail.com"
accountPassword = "sudo#123"
accountCity = "jaipur"

console.log(accountId)
console.table([accountId,accoutnEmail,accountPassword,accountCity,accountState])