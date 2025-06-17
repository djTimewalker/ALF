const display = document.getElementById("display")
const button = document.getElementById("buttons")
button.addEventListener("click", (e) => {
    value = e.target.textContent
    if (value === "AC") {
        display.value = ""
    } else if (value === "=") {
        try {
            display.value = eval(display.value)
        } catch {
            display.value = "Error"
            }
        } else {
            display.value += value
            }
})

