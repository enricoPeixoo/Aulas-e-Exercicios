class Loan {
  static #fee

  constructor(value, date, installment) {
    this.value = value
    this.date = date
    this.installment = installment    
  }

  static get fee () {
    return this.#fee 
  }

  static set fee (newFee) {
    this.#fee = newFee
  }
}

module.exports = Loan