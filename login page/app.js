function signup() {
    let change = document.getElementById("change")
    let fullname = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    // data store local storage

    localStorage.setItem("Name", fullname)
    localStorage.setItem("Email", email)
    localStorage.setItem("Password", password)

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""

    alert("Thanks For Singup")
    change.innerHTML = "Login Page"

}


// create function login

function login() {

    let fullname = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (localStorage.getItem("Name") == fullname &&
        localStorage.getItem("Email") == email &&
        localStorage.getItem("Password") == password) {
        alert("Thanks for login")

    } else {
        alert("incorrecr user name or password!")
    }

}