let tall = [34, 53, 2, 3, 34, 26, 26, 85, 3, 4, 98, 2, 12]

function printArray() {
    let utskrift = ""
    for (let i = 0; i < tall.length; i++) {
        utskrift += tall[i] + ", "
    }
    document.getElementById("o1a-output").innerText = `Array tall inneholder ${utskrift}`
}
function printArrayReverse() {
    let utskrift = ""
    for (let i = tall.length - 1; i >= 0; i--) {
        utskrift += tall[i] + ", "
    }
    document.getElementById("o1b-output").innerText = `Array tall baklengs inneholder ${utskrift}`
}
function printArrayEverySecond() {
    let utskrift = ""
    for (let i = 0; i < tall.length; i += 2) {
        utskrift += tall[i] + ", "
        }
    document.getElementById("o1c-output").innerText = `Array tall sin annenhver verdi inneholder ${utskrift}`
}

function printArrayLessThanTen() {
    let utskrift = ""
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 10) {
            utskrift += tall[i] + ", "
        }
    }
    document.getElementById("o1d-output").innerText = `Array tall med verdier mindre enn 10 inneholder ${utskrift}`
}

function printArrayEvenNumbers() {
    let utskrift = ""
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] % 2 === 0) {
            utskrift += tall[i] + ", "
        }
    }
    document.getElementById("o1e-output").innerText = `Array tall med partall inneholder ${utskrift}`
}

function printArraySum() {
    let sum = tall.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.getElementById("o1f-output").innerText = `Summen av array tall er ${sum}`
}