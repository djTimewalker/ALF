const o1Input = document.getElementById("o1-input-age")
const o1Output = document.getElementById("o1-output")

function renderAlder() {
    const age = parseInt(o1Input.value)
    if (isNaN(age)) {
        o1Output.textContent = "Vennligst skriv inn et gyldig tall."
    } else {
        o1Output.textContent = "Du er en " +alder(age)
    }
}
function alder(age) {
    if (age < 13) {
        return "unge!"
    } else if (age >= 13 && age <= 19) {
        return "tenåring!"
    } else if (age >= 20 && age <= 66) {
        return "voksen!"
    } else {
        return "pensjonist!"
    }
}

const o2Input1 = document.getElementById("o2-input-number1")
const o2Input2 = document.getElementById("o2-input-number2")
const o2Output = document.getElementById("o2-output")

function renderStorstTall() {
    const number1 = parseInt(o2Input1.value)
    const number2 = parseInt(o2Input2.value)

    if (isNaN(number1) || isNaN(number2)) {
        o2Output.textContent = "Vennligst skriv inn gyldige tall!"
    } else {
        o2Output.textContent = "Det største tallet er: " + storstTall(number1, number2)
    }
}
function storstTall(number1, number2) {
        return Math.max(number1, number2)
    }

const o3Input1 = document.getElementById("o3-input-length")
const o3Input2 = document.getElementById("o3-input-width")
const o3Output = document.getElementById("o3-output")

function renderArealRektangel() {
    const length = parseInt(o3Input1.value)
    const width = parseInt(o3Input2.value)

    if (isNaN(length) || isNaN(width)) {
        o3Output.textContent = "Vennligst skriv inn gyldige tall!"
    } else {
        o3Output.textContent = "Arealet av rektangelet er: " + arealRectangle(length, width)
    }
}

function arealRectangle(length, width) {
    return length * width
}

function renderArealSirkel() {
    let radius = parseInt(document.getElementById("o4-input-radius").value)
    if (isNaN(radius)) {
        document.getElementById("o4-output").textContent = "Vennligst skriv inn et gyldig tall."
    } else {
        document.getElementById("o4-output").textContent = "Arealet av sirkelen er: " + arealSirkel(radius)
    }
}

function arealSirkel(radius) {
    const areal = Math.PI * radius**2
    return areal.toFixed(2)
}

const o5Input1 = document.getElementById("o5-input-height")
const o5Input2 = document.getElementById("o5-input-length")
const o5Input3 = document.getElementById("o5-input-width")
const o5Output = document.getElementById("o5-output")
function renderVolumEske() {
    const height = parseInt(o5Input1.value)
    const length = parseInt(o5Input2.value)
    const width = parseInt(o5Input3.value)

    if (isNaN(height) || isNaN(length) || isNaN(width)) {
        o5Output.textContent = "Vennligst skriv inn gyldige tall."
    } else {
        o5Output.textContent = "Volumet av esken er: " + volumEske(height, length, width)
    }
}

function volumEske(height, length, width) {
    return length * width * height
}

const o6Input1 = document.getElementById("o6-input-length")
const o6Input2 = document.getElementById("o6-input-width")
const o6Input3 = document.getElementById("o6-input-height")
const o6Output = document.getElementById("o6-output")
function renderArealEske() {
    const length = parseInt(o6Input1.value)
    const width = parseInt(o6Input2.value)
    const height = parseInt(o6Input3.value)

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        o6Output.textContent = "Vennligst skriv inn gyldige tall."
    } else {
        o6Output.textContent = "Arealet av esken er: " + arealEske(length, width, height)
    }
}

function arealEske(length, width, height) {
    return 2 * (length * width) + 2 * (length * height) + 2 *(width * height)
}

const o7InputFirst = document.getElementById("o7-input-firstname")
const o7InputMiddle = document.getElementById("o7-input-middlename")
const o7InputLast = document.getElementById("o7-input-lastname")
const o7Output = document.getElementById("o7-output")

function renderNavn() {
    const firstname = o7InputFirst.value
    const middlename = o7InputMiddle.value
    const lastname = o7InputLast.value

    if (!firstname || !lastname) {
        o7Output.textContent = "Vennligst skriv inn fornavn og etternavn."
    } else {
        o7Output.textContent = "Initialene dine er: " + initialerNavn(firstname, middlename, lastname)
    }
}

function initialerNavn(firstname, middlename, lastname) {
    return firstname[0].toUpperCase() + "." + (middlename ? middlename[0].toUpperCase() + "." : "") + lastname[0].toUpperCase() + lastname.slice(-lastname.length+1).toLowerCase()
}

const o8InputDollar = document.getElementById("o8-input-dollar")
const o8InputKurs = document.getElementById("o8-input-kurs")
const o8Output = document.getElementById("o8-output")

function renderTollMoms() {
    const dollar = parseFloat(o8InputDollar.value)
    let kurs = parseFloat(o8InputKurs.value)
    if (dollar < 0 || kurs < 0) {
        o8Output.textContent = "Vennligst skriv inn et gyldig tall."
    } else {
        if (isNaN(kurs)) {
            kurs = 10
        }
        o8Output.textContent = "Sluttbeløpet i NOK er: " + tollMoms(dollarToNok(dollar, kurs))
    }
}


function dollarToNok(dollar, kurs) {
    const nok = (dollar * kurs).toFixed(2)
    // console.log(dollar, kurs, nok)
    return parseFloat(nok)
}

function tollMoms(nok) {
    const toll = 249
    const moms = 1.25
    const sluttsum = (nok + toll) * moms
    // console.log(nok, toll, moms, sluttsum)
    return sluttsum.toFixed(2)
}