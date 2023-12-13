class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (email === this.email && password === this.password){
      console.log("Login foi bem sucedido!")
    } else {
      console.log("Login Mal sucedido!")
    }
  }
}

const marcos = new User("Marcos Neto", "mrcneto@gmail.com", "1237")

marcos.login("mrcneto@gmail.com", "1238")

console.log(marcos)

