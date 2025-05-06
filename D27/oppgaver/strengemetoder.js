function snitt() {
    const input = document.getElementById("p1").textContent
    const output = input.slice(-7)
    document.getElementById("utskrift").innerHTML  = `Det siste ordet er: ${output}`
}

function length() {
    const input = document.getElementById("p2").textContent
    const output = input.length
    document.getElementById("utskrift").innerHTML = `Det er: ${output} bokstaver i teksten`
}
function store() {
    const input = document.getElementById("p3").textContent
    const output = input.toUpperCase()
    document.getElementById("utskrift").innerHTML = `Store bokstaver: ${output}`
}
function smol() {
    const input = document.getElementById("p4").textContent
    const output = input.toLowerCase()
    document.getElementById("utskrift").innerHTML = `Små bokstaver: ${output}`
}
function bytt() {
    const input = document.getElementById("p5").textContent
    const output = input.replace("Pompel", "Pilt")
    document.getElementById("utskrift").innerHTML = `Resultat: ${output}`
}
function utdrag() {
    const input = document.getElementById("p6").textContent
    const output = input.substring(15, 20)
    document.getElementById("utskrift").innerHTML = `Vi har hentet ut ordet: ${output}`
}
function finnIndeks() {
    const input = document.getElementById("p7").textContent
    const output = input.indexOf("fantomet")
    document.getElementById("utskrift").innerHTML = `Ordet har index: ${output}`
}
function inneholder() {
    const input = document.getElementById("p8").textContent
    const output = input.includes("inne")
    document.getElementById("utskrift").innerHTML = `${output}`
}
