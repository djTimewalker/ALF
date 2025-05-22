function generateEvenNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            document.getElementById("o1-output").innerHTML += i + "<br>"
        }
    }
}
function generateOddNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            document.getElementById("o2-output").innerHTML += i + "<br>"
        }
    }
}

function generateNumbersDivisibleBy5() {
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            document.getElementById("o3-output").innerHTML += i + "<br>"
        }
    }
}

function generateEvenNumbersDivisibleBy5() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0 && i % 5 === 0) {
            document.getElementById("o4-output").innerHTML += i + "<br>"
        }
    }
}

function generateNumbersDivisibleBy8Or3() {
    for (let i = 0; i <= 100; i++) {
        if (i % 8 === 0 || i % 3 === 0) {
            document.getElementById("o5-output").innerHTML += i + "<br>"
        }
    }
}

function generateCustomOutput() {
    const output = document.getElementById("o6-output")
    output.innerHTML = ""
    const text = document.getElementById("o6-input-text").value
    const count = parseInt(document.getElementById("o6-input-number").value)
    for (let i = 0; i < count; i++) {
        output.innerHTML += text + "<br>"
    }
}

function generateMultiplicationTable() {
    for (let i = 0; i <= 100; i++) {
        document.getElementById("o7-output").innerHTML += `${i} x ${i} = ${i * i}<br>`
    }
}

function generateNumberStatements() {
    let i = 1
    while (i <=7) {
        document.getElementById("o8-output").innerHTML += `Jeg er tall nummer ${i}.<br>`
        i++
    }
}

function generateNumberStatementsEach5thNumberBetween12And98() {
    let i = 12
    let count = 0
    while (i <= 98) {
        if (count % 5 === 0) {
            document.getElementById("o9-output").innerHTML += `Jeg er tall nummer ${i}.<br>`
        }
        i++
        count++
    }
}

function generateNumberStatementsBetween() {
    const start = parseInt(document.getElementById("o10-input-start").value)
    const end = parseInt(document.getElementById("o10-input-end").value)
    for (let i = start; i <= end; i++) {
        document.getElementById("o10-output").innerHTML += i + "<br>"
    }
}
function clearOutput(outputId) {
    document.getElementById(outputId).innerHTML = ""
}