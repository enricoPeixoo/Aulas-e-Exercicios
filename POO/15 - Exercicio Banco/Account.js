const Deposit = require("./Deposit")
const Installment = require("./Installment")
const Transfer = require("./Transfer")

class Account {
  #balance
  #actions = {
    deposits: [],
    installments: [],
    transfers: [],   
  }
  constructor(user) {
    this.user = user
  }

  get balance() {
    return this.#balance
  }
  
  get actions() {
    return this.#actions
  }

  newDeposit(value, date) {
    const newDeposit = new Deposit(value, date)
    this.#balance += deposit.value
    this.#actions.deposits.push(newDeposit)
  }

  newLoan(value, date, installment) {
    const newInstallment = new Installment(value, date, installment)
    this.#balance += installment.value
    this.#actions.installments.push(newInstallment)
  }

  newTransfer(sender, recipient, value, date) {
    const newTransfer = new Transfer(sender, recipient, value, date)
    if (newTransfer.recipient === this.user) {
      this.#balance += newTransfer.value
      this.#actions.transfers.push(newTransfer)
    } else {
      this.#balance -= newTransfer.value
      this.#actions.transfers.push(newTransfer)
    }
  }
}


module.exports = Account