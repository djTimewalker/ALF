document.getElementById("o1-submit-btn").addEventListener("click", function () {
    const o1List = document.getElementById("o1-list")
    const randomNumber = Math.floor(Math.random() * 100) + 1
    const listItem = document.createElement("li")
    listItem.textContent = randomNumber
    o1List.appendChild(listItem)
})

document.getElementById("o2-submit-btn").addEventListener("click", function () {
    const o2Input = document.getElementById("o2-input-text").value
    const pItem = document.createElement("p")
    pItem.textContent = o2Input
    document.getElementById("o2-output").appendChild(pItem)
    document.getElementById("o2-input-text").value = ""
})

document.getElementById("o3-submit-btn").addEventListener("click", function () {
    const o3Input = document.getElementById("o3-input-color").value
    const o3Output = document.getElementById("o3-output")
    const colorBox = document.createElement("div")
    colorBox.setAttribute("class", "color-box")
    colorBox.style.backgroundColor = o3Input
    o3Output.appendChild(colorBox)
    document.getElementById("o3-input-color").value = ""
})

document.getElementById("o4-submit-btn").addEventListener("click", function () {
    const o4Input1 = Number(document.getElementById("o4-input-number1").value)
    const o4Input2 = Number(document.getElementById("o4-input-number2").value)
    const o4Operator = document.getElementById("o4-input-operator").value
    const pItem = document.createElement("p")

    let result
    switch (o4Operator) {
        case "+":
        result = o4Input1 + o4Input2
        break
        case "-":
        result = o4Input1 - o4Input2
        break
        case "*":
        result = o4Input1 * o4Input2
        break
        case "/":
        result = o4Input1 / o4Input2
        break
        }
    pItem.textContent = result
    document.getElementById("o4-output").appendChild(pItem)
})