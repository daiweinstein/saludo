document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button")
    const input = document.querySelector(".input")

    button.addEventListener("click", function() {
        const value = input.value

        if (value === "") {
            input.classList.add("invalidInput")
            console.log("ingresó vacío")
        } else {
            input.classList.remove("invalidInput")
            alert("Hola " + value + "!")
        }        
    })
})
