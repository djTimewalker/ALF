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
    const outputTemperatureF = (inputTemperatureC  * 9 / 5) + 32
    const outputTemperatureK = (inputTemperatureC + 273.15)
    document.getElementById("o2-answer-b").innerHTML = `
    <div class="output">
    <p>${inputTemperatureC} grader Celsius tilsvarer <span class="solution">${(outputTemperatureF.toFixed(1))}</span> grader Fahrenheit og <span class="solution">${(outputTemperatureK.toFixed(2))}</span> grader Kelvin</p>
    </div>
    `
})

/*

Oppgave 3 - Lag et program som konverterer mellom km/h og mph (miles per hour)

På samme måte som tidligere skriver brukeren inn et tall i et tekstfelt, og den beregnede verdien presenteres med passende ledetekst.

"... km/h tilsvarer ... miles per  hour!"

Dette skal skje når brukeren trykker på en knapp.


Du trenger: En mile tilsvarer 1609,34 meter


b) Lag et program som gjør det samme, men i motsatt rekkefølge mph -> km/h

*/

const submitSpeedKPHButton = document.getElementById("submit-kph-btn")
const submitSpeedMPHButton = document.getElementById("submit-mph-btn")
submitSpeedKPHButton.addEventListener("click", () => {
    const inputSpeedKPH = parseFloat(document.getElementById("o3-input-kph").value)
    const outputSpeedMPH = inputSpeedKPH / 1.60934
    document.getElementById("o3-answer-a").innerHTML = `
    <div class="output">
    <p>${inputSpeedKPH} km/t tilsvarer <span class="solution">${(outputSpeedMPH.toFixed(2))}</span> mph.</p>
    </div>
    `
})

submitSpeedMPHButton.addEventListener("click", () => {
    const inputSpeedMPH = parseFloat(document.getElementById("o3-input-mph").value)
    const outputSpeedKPH = inputSpeedMPH * 1.60394
    document.getElementById("o3-answer-b").innerHTML = `
    <div class="output"
    <p>${inputSpeedMPH} mph tilsvarer <span class="solution">${(outputSpeedKPH.toFixed(2))}</span> km/t.</p>
    </div>
    `
})

/*
Oppgave 4 - BMI-kalkulator

Bruker skriver inn verdier for vekt og høyde. Når brukeren trykker på en knapp skal det beregnes BMI og resultatet presenteres for brukeren.

Bmi beregnes som følger:

BMI = (Weight in Kilograms / (Height in Meters x Height in Meters))



Utskrift kan ha formen:

"Basert på din høyde ...m og din kroppsvekt ...kg er din beregnede BMI ..."
*/

const submitBMIButton = document.getElementById("submit-bmi-btn")
submitBMIButton.addEventListener("click", () => {
    const inputWeightKG = parseFloat(document.getElementById("o4-input-kg").value)
    const inputHeightCM = parseFloat(document.getElementById("o4-input-cm").value)
    const outputBMI = inputWeightKG / (inputHeightCM /100 * inputHeightCM / 100)
    document.getElementById("o4-answer").innerHTML = `
    <div class="output">
    <p>Baswert på din høyde ${inputHeightCM} cm og din kroppsvekt ${inputWeightKG} er din beregnede BMI <span class="solution">${(outputBMI.toFixed(2))}</span></p>
    </div>
    `
})

/*
Oppgave 5 - Øvelse med ulike streng-funksjoner


Lag et input-felt av typen tekst, som brukeren kan skrive inn noe i.

Lag 3 enkle knapper under tekstboksen:

"Finn lengde" ( Tips: .length )

"Gjør om til store bokstaver" ( Tips: .toUpperCase() )

"Gjør om til små bokstaver" ( Tips: .toLowerCase() )


Hver av knappene skal være koblet til en egen funksjon som utfører det som knappen beskriver.
Du må gi et godt navn til hver funksjon, og skrive det som skal skje, når brukeren klikker på knappen.

Skriv ut svaret i en <p> som du gir id="utskrift"
*/

const submitLengthButton = document.getElementById("o5-length-btn")
const submitUpperCaseButton = document.getElementById("o5-upper-btn")
const submitLowerCaseButton = document.getElementById("o5-lower-btn")
submitLengthButton.addEventListener("click", () => {
    const inputText = document.getElementById("o5-input-text").value
    const outputText = inputText.length
    document.getElementById("o5-answer").innerHTML = `
    <div class="output">
    <p>Teksten: ${inputText} inneholder <span class="solution">${outputText}</span> karakterer.</p>
    </div>
    `
})

submitUpperCaseButton.addEventListener("click", () => {
    const inputText = document.getElementById("o5-input-text").value
    const outputText = inputText.toUpperCase()
    document.getElementById("o5-answer").innerHTML = `
    <div class="output">
    <p>Teksten: ${inputText} omgjort til store bokstaver: <span class="solution">${outputText}</span></p>
    </div>
    `
})

submitLowerCaseButton.addEventListener("click", () => {
    const inputText = document.getElementById("o5-input-text").value
    const outputText = inputText.toLowerCase()
    document.getElementById("o5-answer").innerHTML = `
    <div class="output">
    <p>Teksten: ${inputText} omgjort til små bokstaver: <span class="solution">${outputText}</span></p>
    </div>
    `
})
