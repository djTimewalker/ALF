document.getElementById("o1-submit-btn").addEventListener("click", function() {
    const o1Input = document.getElementById("o1-input-text").value
    const o1Output = document.getElementById("o1-output")
        if (o1Input === "H") {
            o1Output.innerHTML = "Du har tippet: Hjemme"
        } else if (o1Input === "U") {
            o1Output.innerHTML = "Du har tippet: Uavgjort"
        } else if (o1Input === "B") {
            o1Output.innerHTML = "Du har tippet: Borte"
        } else {
        o1Output.innerHTML = "Vennligst skriv inn H, U eller B."
    }
})

document.getElementById("o2-submit-btn").addEventListener("click", function () {
    const o2Input = document.getElementById("o2-input-text").value
    const o2Output = document.getElementById("o2-output")
    switch (o2Input) {
        case "H || h":
            o2Output.innerHTML = "Du har tippet: Hjemme"
            break
        case "U || u":
            o2Output.innerHTML = "Du har tippet: Uavgjort"
            break
        case "B || b":
            o2Output.innerHTML = "Du har tippet: Borte"
            break
        default:
            o2Output.innerHTML = "Vennligst skriv inn H/h, U/u eller B/b."
    }
})

document.getElementById("o3-submit-btn").addEventListener("click", function () {
    const o3Input = document.getElementById("o3-input-text").value
    const o3Output = document.getElementById("o3-output")
    if (o3Input === "H" || o3Input === "h") {
        o3Output.innerHTML = "Du har tippet: Hjemme"
    } else if (o3Input === "U" || o3Input === "u") {
        o3Output.innerHTML = "Du har tippet: Uavgjort"
    } else if (o3Input === "B" || o3Input === "b") {
        o3Output.innerHTML = "Du har tippet: Borte"
    } else {
        o3Output.innerHTML = "Vennligst skriv inn H/h, U/u eller B/b."
    }
})

document.getElementById("o4-submit-btn").addEventListener("click", function () {
    const o4InputKG = document.getElementById("o4-input-kg").value
    const o4InputCM = document.getElementById("o4-input-cm").value
    const o4Output = document.getElementById("o4-output")
    const o4InputKGNum = parseFloat(o4InputKG)
    const o4InputCMNum = parseFloat(o4InputCM)
    const o4BMI = o4InputKGNum / ((o4InputCMNum / 100) ** 2)
    let bmiKlasse = ""
    if (o4BMI < 18.5) {
        bmiKlasse = "Lett undervektig: BMI under 18.5"
        o4Output.innerText = `Din BMI er:  ${o4BMI.toFixed(2)}. Dette klassifiseres som: ${bmiKlasse}`
    } else if (o4BMI >= 18.5 && o4BMI < 24.9) {
        bmiKlasse = "Normalvektig: BMI mellom 18.5 og 24.9"
        o4Output.innerText = `Din BMI er:  ${o4BMI.toFixed(2)}. Dette klassifiseres som: ${bmiKlasse}`
    } else if (o4BMI >= 25 && o4BMI < 29.9) {
        bmiKlasse = "Lett overvektig: BMI mellom 25 og 29.9"
        o4Output.innerText = `Din BMI er:  ${o4BMI.toFixed(2)}. Dette klassifiseres som: ${bmiKlasse}`
    } else {
        bmiKlasse = "Fedme: BMI over 30"
        o4Output.innerText = `Din BMI er:  ${o4BMI.toFixed(2)}. Dette klassifiseres som: ${bmiKlasse}`
    }
})

document.getElementById("o5-submit-btn").addEventListener("click", function () {
    const o5Input = document.getElementById("o5-input-date").value
    const o5Output = document.getElementById("o5-output")
    let maaned = ""
    switch (o5Input.slice(-2)) {
        case "01":
            maaned = "januar"
            break
        case "02":
            maaned = "februar"
            break
        case "03":
            maaned = "mars"
            break
        case "04":
            maaned = "april"
            break
        case "05":
            maaned = "mai"
            break
        case "06":
            maaned = "juni"
            break
        case "07":
            maaned = "juli"
            break
        case "08":
            maaned = "august"
            break
        case "09":
            maaned = "september"
            break
        case "10":
            maaned = "oktober"
            break
        case "11":
            maaned = "november"
            break
        case "12":
            maaned = "desember"
            break
        default:
            maaned = "Ugyldig måned"
        }
        o5Output.innerText = `Du skrev inn: ${o5Input} som tilsvarer ${o5Input.slice(0, 2)}. ${maaned}`
})

document.getElementById("o6-submit-btn").addEventListener("click", function () {
    const o6Input = document.getElementById("o6-input-year").value
    const o6Output = document.getElementById("o6-output")
    const o6InputNum = parseInt(o6Input)
    if (o6InputNum % 4 == 0 && o6InputNum % 100 != 0 || o6InputNum % 400 == 0) {
        o6Output.innerText = `Du skrev inn: ${o6Input} som er et skuddår`
    } else {
        o6Output.innerText = `Du skrev inn: ${o6Input} som ikke er et skuddår`
    }
})
