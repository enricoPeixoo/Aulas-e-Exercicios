class Wallet {
  #ammount
  #username

  constructor() {
    this.#ammount = 100.99 * 100 //10099
  }

  get ammount() {
    return this.#ammount / 100
  }

  set username (newUsername) {
    this.#username = newUsername
  }

  get username () {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.ammount)

myWallet.username = "Isaac"
console.log(myWallet.username)