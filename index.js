const nameInput = document.getElementById("name")
const password = document.getElementById("password")
const error = document.getElementById("error")
const button = document.getElementById("button")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    let message = []
    if (nameInput.value !== "") {
        if (!/^[a-zA-Z]+$/.test(nameInput.value)) {  
            message.push("Name must only contain letters.");
        }   
        if (nameInput.value.length < 3){
        message.push("Name must be 3 or more letters.")
        }
        
    } else {
        message.push("Name must be provided.")
    }

    if (password.value !== "") {
        if (password.value.length < 3) {
            message.push("Password must be 3 or more characters")
        }
        if (password.value.length > 15) {
            message.push("Password must be less than 15 characters")
        }
    } else {
        message.push("Please provide your password.")
    }

    if (password.value === "password") {
        message.push("Password cannot be password")
    }

    error.style.color = "red"
    error.style.fontWeight = "bold"
    error.innerHTML = message.join('</br>')
    e.preventDefault()

    if (message.length == "") {
        form.reset()
    }
})