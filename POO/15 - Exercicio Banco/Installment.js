class Installment {
  constructor(value, numberInstallment, situtation = "Pendente") {
    this.value = value
    this.numberInstallment = numberInstallment
    this.situtation = situtation
  }
}

module.exports = Installment