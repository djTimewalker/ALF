/*
Oppgave 1 – Lek med tall
Lag et program som leser det tallet(kun ett tall) som brukeren
har skrevet inn i et tekstfelt.Dette skal skje når en knapp
trykkes.Skriv ut til websiden hva halvparten av tallet er, hva
det dobbelte av tallet er, hva det tredobbelte av tallet er, og
hva tallet ganget med seg selv er.Husk å benytte forklarende
tekst til hver linje som skrives ut - det skal være lett å
lese programmet for en utenforstående.

(Tips: en får fatt i verdien brukeren skriver inn ved å spørre
DOM: let inputverdi = document.getElementById("input").value)
*/

const submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", () => {
    const inputNumber = Number(document.getElementById("input-number").value)
    document.getElementById("o1-answer").innerHTML = `
    <div class=output>
    <p>Halvparten av tallet du sendte inn er: <span class="solution">${inputNumber / 2}</span></p>
    <p>Det dobbelte av det tallet du sendte inn er: <span class="solution">${inputNumber * 2}</span></p>
    <p>Det tredobbelte av tallet du sendte inn er: <span class="solution">${inputNumber * 3}</span></p>
    <p>Tallet du sendte inn ganget med seg selv er: <span class="solution">${inputNumber*inputNumber}</span></p>
    </div>
    `
})

/*
Oppgave 2 - Konvertering mellom ulike temperatur-skalaer

Lag et program der brukeren skriver inn en verdi i Fahrenheit i et tekstfelt. Regn om til Celsius og Kelvin, og presenter dette for brukeren med passene ledetekst ala

"35 grader Fahrenheit tilsvarer ... grader Celsius og ... grader Kelvin"

T (° F) = T (° C) × 9/5 + 32


Dette skal skje når en knapp trykkes.

b) Lag et program som konverterer andre veien også ( Celsius -> Fahrenheit og Kelvin)
T (° C) = ( T (° F) - 32) × 5/9
*/

const submitTempFButton = document.getElementById("submit-temp-f-btn")
const submitTempCButton = document.getElementById("submit-temp-c-btn")
submitTempFButton.addEventListener("click", () => {
    const inputTemperatureF = parseFloat(document.getElementById("input-temperature-f").value)
    const outputTemperatureC = (inputTemperatureF - 32) * 5 / 9
    const outputTemperatureK = (outputTemperatureC + 273.15)
    document.getElementById("o2-answer-a").innerHTML = `
    <div class="output">
    <p>${inputTemperatureF} grader Fahrenheit tilsvarer <span class="solution">${(outputTemperatureC.toFixed(1))}</span> grader Celcius og <span class="solution">${(outputTemperatureK.toFixed(2))}</span> grader Kelvin</p>
    </div>
    `
})
submitTempCButton.addEventListener("click", () => {
    const inputTemperatureC = parseFloat(document.getElementById("input-temperature-c").value)
    const outputTemperatureF = (inputTemperatureC *  9 / 5) + 32
    const outputTemperatureK = (inputTemperatureC + 273.15)
    document.getElementById("o2-answer-b").innerHTML = `
    <div class="output">
    <p>${inputTemperatureC} grader Celsius tilsvarer <span class="solution">${(outputTemperatureF.toFixed(1))}</span> grader Fahrenheit og <span class="solution">${(outputTemperatureK.toFixed(2))}</span> grader Kelvin</p>
    </div>
    `
})

