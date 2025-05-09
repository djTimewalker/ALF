/*
Oppgave 1: If-setning (betingelse)
Lag en HTML-side med en tekstinndata og en knapp.
Når knappen klikkes, les teksten fra inndatafeltet og
bruk en if-else-setning for å vise en melding som sier
"Hei, <navn>" hvis inndatafeltet ikke er tomt; ellers vis
"Vennligst skriv inn navnet ditt."

*/

const o1SubmitButton = document.getElementById("o1-submit-btn")
o1SubmitButton.addEventListener("click", function () {
    const o1InputName = document.getElementById("o1-input-name")
    let o1Output = ""
    if (o1InputName.value) {
        o1Output = `Hei, ${o1InputName.value}.`
    } else {
        o1Output = "Vennligst skriv inn navnet ditt!"
    }
    document.getElementById("o1-output").innerHTML = `
    <div class="answer">
        <p><span class="solution">${o1Output}</span></p>
    </div>
    `
    o1InputName.value = ""
})

/*
Oppgave 2: Kalkulatorfunksjon
Lag en HTML-side med to nummerinndatafelt og en rullegardinmeny
for operasjoner (+, -, *, /). Skriv en JavaScript-funksjon
som utfører den valgte operasjonen på de to tallene når en
knapp klikkes og viser resultatet.
*/

const o2SubmitButton = document.getElementById("o2-submit-btn")
o2SubmitButton.addEventListener("click", function () {
    const o2InputNumber1 = Number(document.getElementById("o2-input-number1").value)
    const o2InputNumber2 = Number(document.getElementById("o2-input-number2").value)
    const o2InputOperator = document.getElementById("o2-input-operator").value
    if (o2InputOperator === "+") {
        document.getElementById("o2-output").innerHTML = `
        <div class="answer">
        <p>Løsning: ${o2InputNumber1} ${o2InputOperator} ${o2InputNumber2} = <span class=solution>${o2InputNumber1+o2InputNumber2}</span></p>
        </div>
        `
    } else if (o2InputOperator === "-") {
        document.getElementById("o2-output").innerHTML = `
        <div class="answer">
        <p>Løsning: ${o2InputNumber1} ${o2InputOperator} ${o2InputNumber2} = <span class=solution>${o2InputNumber1 - o2InputNumber2}</span></p>
        </div>
        `
    } else if (o2InputOperator === "*") {
        document.getElementById("o2-output").innerHTML = `
        <div class="answer">
        <p>Løsning: ${o2InputNumber1} ${o2InputOperator} ${o2InputNumber2} = <span class=solution>${o2InputNumber1 * o2InputNumber2}</span></p>
        </div>
        `
    } else if (o2InputOperator === "/") {
        document.getElementById("o2-output").innerHTML = `
        <div class="answer">
        <p>Løsning: ${o2InputNumber1} ${o2InputOperator} ${o2InputNumber2} = <span class=solution>${o2InputNumber1 / o2InputNumber2}</span></p>
        </div>
        `
    }
})

/*
Oppgave 3: Radioknappvalg
Lag en HTML-side med radioknapper for tre forskjellige farger.
Skriv en funksjon som viser en melding når en radioknapp er valgt,
for eksempel "Du valgte rød."
*/

const o3SubmitButton = document.getElementById("o3-submit-btn")
o3SubmitButton.addEventListener("click", function () {
    let colorChosen = ""
    if (document.getElementById("o3-radio-red").checked) {
        colorChosen = "rød"
    } else if (document.getElementById("o3-radio-green").checked) {
        colorChosen = "grønn"
    } else if (document.getElementById("o3-radio-blue").checked) {
        colorChosen = "blå"
    }
    document.getElementById("o3-output").innerHTML = `
    <div class="answer">
    <p>Du valgte: <span class="solution">${colorChosen}</span></p>
    </div>
    `
})

/*
Oppgave 4: Slider
Lag en HTML-side med slidere for tre forskjellige farger.
Sliderene skal ha verdien fra 0-255, og skal representere de
3 fargekomponentene RGB (Red, GreenBlue).
Legg til en knapp, som sier bytt farge, som endrer bakgrunnsfargen
til hele siden, basert på de 3 verdiene i sliderene.
*/

const o4SubmitButtonA = document.getElementById("o4a-submit-btn")
o4SubmitButtonA.addEventListener("click", function () {
    const redNumber = document.getElementById("o4-slider-red").value
    const greenNumber = document.getElementById("o4-slider-green").value
    const blueNumber = document.getElementById("o4-slider-blue").value
    document.body.style.backgroundColor = `rgb(${redNumber}, ${greenNumber}, ${blueNumber})`
    document.getElementById("o4a-output").innerHTML = `
    <div class="answer">
    <p>Du har endret bakgrunnsfargen til: <span class="solution">Rød:${redNumber}, Grønn: ${greenNumber}, Blå: ${blueNumber}</span></p>
    </div>
    `
})

/*
Oppgave 4b) : SLidere med verdi
Som den forrige, men nå ønsker vi å se verdien av hver
slider skrevet til skjermen når brukeren endrer den [0 - 255]
*/

const sliderRed = document.getElementById("o4b-slider-red")
const outputRed = document.getElementById("valueRed")
const sliderGreen = document.getElementById("o4b-slider-green")
const outputGreen = document.getElementById("valueGreen")
const sliderBlue = document.getElementById("o4b-slider-blue")
const outputBlue = document.getElementById("valueBlue")
const o4bSubmitButton = document.getElementById("o4b-submit-btn")
o4bSubmitButton.addEventListener("click", function () {
    const redNumber = document.getElementById ("o4b-slider-red").value
    const greenNumber = document.getElementById ("o4b-slider-green").value
    const blueNumber = document.getElementById ("o4b-slider-blue").value
    document.body.style.backgroundColor= `rgb(${redNumber}, ${greenNumber}, ${blueNumber})`
    document.getElementById("o4b-output").innerHTML = `
    <div class="answer">
    <p>Du har endret bakgrunnsfargen til: <span class="solution">Rød:${redNumber}, Grønn: ${greenNumber}, Blå: ${blueNumber}</span></p>
    </div>
    `
})
outputRed.innerHTML = sliderRed.value
outputGreen.innerHTML = sliderGreen.value
outputBlue.innerHTML = sliderBlue.value
sliderRed.oninput = function () {
    outputRed.innerHTML = this.value
}
sliderGreen.oninput = function () {
    outputGreen.innerHTML = this.value
}
sliderBlue.oninput = function () {
    outputBlue.innerHTML = this.value
}

