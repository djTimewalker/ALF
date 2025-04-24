/* Oppgave 1*/

let heltall = 1
let desimaltall = 1.5
let endaEtHeltall = 8
let endaEtDesimaltall = 1.3
let gangestykke = heltall * desimaltall

console.log(heltall + desimaltall)
console.log(endaEtHeltall * heltall)
console.log(gangestykke)
console.log(heltall * desimaltall * endaEtHeltall * endaEtDesimaltall)

/* Oppgave 2 */

function render() {
    let name, color
    name = prompt("Tast inn ditt fornavn")
    color = prompt("Tast inn din favorittfarge")
    document.getElementById("answer").innerHTML = "Mitt navn er, " + name + ". " + "Jeg liker best " + color + "-farger."
}

/* Oppgave 3 */

function renderNames() {
    let fnavn = document.getElementById("fnavn")
    let mnavn = document.getElementById("mnavn")
    let enavn = document.getElementById("enavn")
    let names = fnavn.value + " " + mnavn.value + " " + enavn.value
    document.getElementById("names").innerHTML = names
    fnavn.value = ""
    mnavn.value = ""
    enavn.value = ""
}

/* Oppgave 4 */
const button0 = document.getElementById("reset-image-btn")
const button1 = document.getElementById("norway-image-btn")
const button2 = document.getElementById("sweden-image-btn")
const button3 = document.getElementById("denmark-image-btn")
const image = document.getElementById("hero-image")
button0.addEventListener("click", function() {
    image.src = "images/SpringDaffodils_1920x1080.jpg"
})
button1.addEventListener("click", function () {
    image.src="images/Flag_of_Norway.svg"
})
button2.addEventListener("click", function () {
    image.src="images/Flag_of_Sweden.svg"
})
button3.addEventListener("click", function () {
    image.src="images/Flag_of_Denmark.svg"
})

/* Oppgave 5 */
const o5h3 = document.getElementById("o5-h3")
const o5h4 = document.getElementById("o5-h4")
const o5h5 = document.getElementById("o5-h5")
const o5h6 = document.getElementById("o5-h6")
document.getElementById("o5-btn1").addEventListener("click", function () {
    o5h3.style.color = "red"
})
document.getElementById("o5-btn2").addEventListener("click", function () {
    o5h4.style.color = "red"
})
document.getElementById("o5-btn3").addEventListener("click", function () {
    o5h5.style.color = "red"
})
document.getElementById("o5-btn4").addEventListener("click", function () {
    o5h6.style.color = "red"
})

/* Oppgave 6 */
function echo() {
    const textbox = document.getElementById("textbox")
    const echo = document.getElementById("echo")
    echo.textContent = textbox.value

}