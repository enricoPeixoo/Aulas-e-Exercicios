const Account = require("./Account");

const account = new Account("Enrico")

account.newDeposit(30, "26/12/2023")
console.log(account.balance)
console.log(account.actions)