class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Login bem sucedido!")
    } else {
      console.log("Login mal sucedido, tente novamente!")
    }
  }
}

module.exports = User