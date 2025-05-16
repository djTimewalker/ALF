document.getElementById("o1-submit-btn").addEventListener("click", function () {
    const o1Input = Number(document.getElementById("o1-input-number").value)
    const o1Output = document.getElementById("o1-output")
    o1Input % 2 === 0
        ? (o1Output.innerHTML = `Tallet ${o1Input} er et partall`)
        : (o1Output.innerHTML = `Tallet ${o1Input} er et oddetall`)
})

document.getElementById("o2-submit-btn").addEventListener("click", function () {
    const o2Input1 = Number(document.getElementById("o2-input-number1").value)
    const o2Input2 = Number(document.getElementById("o2-input-number2").value)
    const o2Output = document.getElementById("o2-output")
    if (o2Input1 > o2Input2) {
        o2Output.innerHTML = `Tallet ${o2Input1} er større enn tallet ${o2Input2}`
    } else if (o2Input1 < o2Input2) {
        o2Output.innerHTML = `Tallet ${o2Input2} er større enn tallet ${o2Input1}`
    } else {
        o2Output.innerHTML = `Tallet ${o2Input1} og ${o2Input2} er like store`
    }
})

document.getElementById("o3-submit-btn").addEventListener("click", function () {
    const o3Input = document.getElementById("o3-input-month").value.toLowerCase()
    const o3Output = document.getElementById("o3-output")
    let daysInMonth

    switch (o3Input) {
        case "januar":
        case "mars":
        case "mai":
        case "juli":
        case "august":
        case "oktober":
        case "desember":
            daysInMonth = 31
            break
        case "april":
        case "juni":
        case "september":
        case "november":
            daysInMonth = 30
            break
        case "februar":
            daysInMonth = 28
            break
        default:
            o3Output.innerHTML = "Ugyldig måned"
            return
    }

    o3Output.innerHTML = `I måned ${o3Input} er det ${daysInMonth} dager`
})

let o4atotalsum = 0
let o4antTall = 0
document.getElementById("o4a-submit-btn").addEventListener("click", function () {
    const o4aInput = Number(document.getElementById("o4a-input-number").value)
    const o4aOutput = document.getElementById("o4a-output")
    o4atotalsum += o4aInput
    o4antTall++
    const snitt = o4atotalsum / o4antTall
    o4aOutput.innerHTML = `Gjennomsnittet av ${o4aInput} er ${snitt.toFixed(2)}`
    document.getElementById("o4a-input-number").value = ""
})

let o4btotalsum = 0
let o4bantTall = 0

document.getElementById("o4b-submit-btn").addEventListener("click", function () {
    const o4bInput = Number(document.getElementById("o4b-input-number").value)
    const o4bOutput = document.getElementById("o4b-output")
    const o4bOutputAvg = document.getElementById("o4b-output-avg")
    o4btotalsum += o4bInput
    o4bantTall++
    o4bOutput.innerHTML += `${o4bInput} <br>`
    const snitt = o4btotalsum / o4bantTall
    o4bOutputAvg.innerHTML = `Gjennomsnittet er ${snitt.toFixed(2)}`
    document.getElementById("o4b-input-number").value = ""
})

document.getElementById("o5-submit-btn").addEventListener("click", function () {
    const personer = ["Ole", "Dole", "Doffen", "Donald", "Dolly"]
    const o5Output = document.getElementById("o5-output")
    o5Output.innerHTML = `Beboere i Andeby:<br>
    <ol>
        <li>${personer[0]}</li>
        <li>${personer[1]}</li>
        <li>${personer[2]}</li>
        <li>${personer[3]}</li>
        <li>${personer[4]}</li>
    </ol>
    `
})