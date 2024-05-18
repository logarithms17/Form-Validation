const nameInput = document.getElementById("name")
const password = document.getElementById("password")
const error = document.getElementById("error")
const button = document.getElementById("button")
const form = document.querySelector("form")
const name = nameInput.value.trim()


form.addEventListener("submit", (e) => {
    let message = []
    if (nameInput.value !== "") {
        if (nameInput.value.length < 3){
        message.push("Names must be 3 or more letters.")
        }
        if (!/^[A-Za-z\s]+$/.test(name)) {  
            message.push("Name must only contain letters.");
        }
        
    } else {
        message.push("Name must be provided.")
    }

    if (password.value !== "") {
        if (password.value.length < 3) {
            message.push("Password must be 3 or more characters")
        }
    } else {
        message.push("Please provide your password.")
    }

    console.log(message)
    console.log(password.value)
    error.style.color = "red"
    error.style.fontWeight = "bold"
    error.innerHTML = message.join('</br>')
    e.preventDefault()

    if (message.length == "") {
        form.reset()
    }
})