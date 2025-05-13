/*
Oppgave 1 innerHTML


Handleliste - innerHTML(!)



Lag en nettside der en kan legge til varer en har tenkt å
kjøpe i butikken

-Legg inn en beskrivende overskrift-tag, av typen h1

-Legg til et tekstfelt som brukeren kan skrive inn varenavn,
bruk placeholder "Legg til vare"

-Legg til en knapp som brukeren kan trykke på for å registrere
ny vare i listen, med teksten "Legg til vare"

-Legg til et felt (<div>? <p>? ) hvor varene som er skrevet inn
listes opp


-Prøv å få listen på formen

-Vaskepulver
-Kartong med egg
-.....
-.....

med en vare på hver linje (en vare/linje er da én inntasting
fra bruker).

*/

const o1SubmitButton = document.getElementById("o1-submit-btn")
o1SubmitButton.addEventListener("click", () => {
    const o1Input = document.getElementById("o1-input-text").value
    document.getElementById("o1-output").innerHTML += "-" + " " + o1Input + "<br>"
})

/*
Oppgave 2 - innerText (!) (med Template String)

Litt som oppgaven over, men skriv teksten ut i et tekstfelt som
brukeren IKKE kan skrive i. Og benytt .innerText i stedet
for den vanlige innerHTML

La brukeren skrive inn en inn liste over sine favoritt-bøker

Prøv å få listen på samme form som over
*/

const o2SubmitButton = document.getElementById("o2-submit-btn")
o2SubmitButton.addEventListener("click", () => {
    const o2Input = document.getElementById("o2-input-list").value
    document.getElementById("o2-output").innerText += `- ${o2Input} \n`
})

/*
Oppgave 3
Lag en klikke-teller!

Det er et lite program som holder rede på hvor mange
ganger en bruker klikker på en knapp. Skriv antallet i et
stort tekstfelt.

Benytt en "toggle" CSS for å bytte styling i tekstfeltet for
hvert klikk, slik at brukeren ser klart at det klikkes.
Dvs at tallet for antall klikk oppdateres, og noe ved selve
tekstboksen/teksten endres, for hvert klikk.
Tips: opprett en teller-variabel som tar vare på antall klikk,
og som øker med 1 for hvert klikk...
*/

let antallKlikk = 0
const o3SubmitButton = document.getElementById("o3-submit-btn")
const o3PTag = document.getElementById("o3-p1")
o3SubmitButton.addEventListener("click", () => {
    antallKlikk++
    o3PTag.classList.toggle("buttonclicked")
    document.getElementById("o3-output").innerHTML = antallKlikk
})

/*
Oppgave 4
Lag minst 5 ulike CSS klasser som styler ulike ting.
Benytt JS-kode til å hekte disse klassene på ulike
HTML-elementer på siden, slik at de blir stylet i
følge CSS-reglene til klassen.

fyll en side med ulike HTML-elementer.
noen <p>'er <h1>, <h2> , <h3>  etc.. bruk flest mulig
la noen elementer ha sn egen id, mens andre igjen kan
være medlem av en klasse, og noen både klasse og id-løs

Tanken er å øve på å style de ulike elementene ved å hekte
 på (og av) de forhåndsdefinerte CSS-klassene , på de
 ulike HTML-elementene vha classList.add og remove
*/

const o4Class1Button = document.getElementById("o4-class1-btn")
const o4Class2Button = document.getElementById("o4-class2-btn")
const o4Class3Button = document.getElementById("o4-class3-btn")
const o4Class4Button = document.getElementById("o4-class4-btn")
const o4Class5Button = document.getElementById("o4-class5-btn")
const o4Class6Button = document.getElementById("o4-class6-btn")
o4Class1Button.addEventListener("click", () => {
    document.getElementById("o4-h2").classList.add("o4-h2-x")
})
o4Class2Button.addEventListener("click", () => {
    document.getElementById("o4-p1").classList.add("o4-p1-x")
})
o4Class3Button.addEventListener("click", () => {
    document.getElementById("o4-p2").classList.add("o4-p2-x")
})
o4Class4Button.addEventListener("click", () => {
    document.getElementById("o4-p3").classList.add("o4-p3-x")
})
o4Class5Button.addEventListener("click", () => {
    document.getElementById("o4-p4").classList.remove("o4-p4-x")
})
o4Class6Button.addEventListener("click", () => {
    document.getElementById("o4-h3").classList.toggle("buttonclicked")
})