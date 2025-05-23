function generateResult() {
    let utskrift = ""
    let sum = 0, tall = 0
    while (sum < 1238) {
        tall += 1
        sum += tall
    }
    utskrift = "Det siste tallet som gjorde at løkken passerte 1238 var: " + tall
    document.getElementById("o1a-output").innerHTML = utskrift
}

function generateResult2() {
    let utskrift = ""
    let sum = 0, tall = 0
    while (sum < 2251) {
        tall += 2
        sum += tall
    }
    utskrift = "Det siste partallet som gjorde at løkken oversteg grensen på 2250 var: " + tall
    document.getElementById("o1b-output").innerHTML = utskrift
}

function generateResult3() {
    let tall1, tall2, produkt
    let tabell = "<table>"
    for (tall1 = 1; tall1 <= 10; tall1++) {
        tabell += "<tr>"
        for (tall2 = 1; tall2 <= 10; tall2++) {
            produkt = tall1 * tall2
            tabell += "<td>" + produkt + "</td>"
        }
        tabell += "</tr>"
    }
    tabell += "</table>"
    document.getElementById("o2a-output").innerHTML = tabell
}

function generateResult4() {
    let tall1, tall2, produkt
    let tabell = "<table>"
    for (tall1 = 1; tall1 <= 10; tall1++) {
        tabell += "<tr>"
        for (tall2 = 10; tall2 <= 19; tall2++) {
            produkt = tall1 * tall2
            tabell += "<td>" + produkt + "</td>"
        }
        tabell += "</tr>"
    }
    tabell += "</table>"
    document.getElementById("o2b-output").innerHTML = tabell
}

function generateResult5() {
    let tall1, tall2, produkt
    let tabell = "<table>"
    for (tall1 = 1; tall1 <= 10; tall1++) {
        tabell += "<tr>"
        for (tall2 = 1; tall2 <= 10; tall2++) {
            produkt = tall1 * tall2
            if (tall1 === tall2) {
                tabell += "<td>***</td>"
                continue
            }
                tabell += "<td>" + produkt + "</td>"
        }
        tabell += "</tr>"
    }
    tabell += "</table>"
    document.getElementById("o3-output").innerHTML = tabell
}

function generateResult6() {
    let utskrift = ""
    let bottlesStart = Number(document.getElementById("o4-input-number").value)
        if (bottlesStart < 1 || bottlesStart > 10) {
            document.getElementById("o4-output").innerHTML = "Ugyldig verdi. Vennligst oppgi et tall mellom 1 og 10."
            return
        }
    for (let bottles = bottlesStart; bottles > 0; bottles--) {
        if (bottles === 1) {
            utskrift += bottles + " green bottle, hanging on a wall, " + "<br>" + bottles + " green bottle, hanging on a wall.<br>"
            utskrift += "if 1 green bottle were to accidentally fall, " + "<br>" + " there'd be " + (bottles - 1) + " green bottles, hanging on the wall.<br><br>"
        } else {
            utskrift += bottles + " green bottles, hanging on a wall, " + "<br>" + bottles + " green bottles, hanging on a wall.<br>"
            utskrift += "if 1 green bottle were to accidentally fall, " + "<br>" + " there'd be " + (bottles - 1) + " green bottles, hanging on the wall.<br><br>"
        }
    }
    document.getElementById("o4-output").innerHTML = utskrift
}

function checkPrimeNumber() {
    let number = Number(document.getElementById("o5-input-number").value)
    let isPrime = true

    if (number < 2) {
        isPrime = false
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
    }

    if (isPrime) {
        document.getElementById("o5-output").innerHTML = "Tallet " + number + " er et primtall."
    } else {
        document.getElementById("o5-output").innerHTML = "Tallet " + number + " er ikke et primtall."
    }
}

function generateResult7() {
    let utskrift = ""
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            utskrift += `${i}${j}<br>`
        }
    }
    document.getElementById("o6-output").innerHTML = utskrift
}

function generateResult8() {
    let utskrift = ""
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            for (let k = 1; k <= 5; k++) {
                utskrift += `${i}${j}${k}<br>`
            }
        }
    }
    document.getElementById("o7-output").innerHTML = utskrift
}

function generateResult9() {
    let utskrift = ""
    let startNumber = Number(document.getElementById("o8-input-start").value)
    let endNumber = Number(document.getElementById("o8-input-end").value)
    for (let i = startNumber; i <= endNumber; i++) {
        if (i % 2 === 0) {
            utskrift += i + "<br>"
        }
    }
    document.getElementById("o8-output").innerHTML = utskrift
}