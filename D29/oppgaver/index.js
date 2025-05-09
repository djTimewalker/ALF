/*
Oppgave 1 innerHTML


Handleliste - innerHTML(!)



Lag en nettside der en kan legge til varer en har tenkt å kjøpe i butikken

-Legg inn en beskrivende overskrift-tag, av typen h1

-Legg til et tekstfelt som brukeren kan skrive inn varenavn, bruk placeholder "Legg til vare"

-Legg til en knapp som brukeren kan trykke på for å registrere ny vare i listen, med teksten "Legg til vare"

-Legg til et felt (<div>? <p>? ) hvor varene som er skrevet inn listes opp


-Prøv å få listen på formen

-Vaskepulver
-Kartong med egg
-.....
-.....

med en vare på hver linje (en vare/linje er da én inntasting fra bruker).

*/

const o1SubmitButton = document.getElementById("o1-submit-btn")
o1SubmitButton.addEventListener("click", () => {
    const o1Input = document.getElementById("o1-input-text").value
    document.getElementById("o1-output").innerHTML += "-" + " " + o1Input + "<br>"
})

/*
Oppgave 2 - innerText (!) (med Template String)

Litt som oppgaven over, men skriv teksten ut i et tekstfelt som brukeren IKKE kan skrive i. Og benytt .innerText i stedet for den vanlige innerHTML

La brukeren skrive inn en inn liste over sine favoritt-bøker

Prøv å få listen på samme form som over
*/

/*
Oppgave 3
Lag en klikke-teller!

Det er et lite program som holder rede på hvor mange ganger en bruker klikker på en knapp. Skriv antallet i et stort tekstfelt.

Benytt en "toggle" CSS for å bytte styling i tekstfeltet for hvert klikk, slik at brukeren ser klart at det klikkes.
Dvs at tallet for antall klikk oppdateres, og noe ved selve tekstboksen/teksten endres, for hvert klikk.
Tips: opprett en teller-variabel som tar vare på antall klikk, og som øker med 1 for hvert klikk...
*/

let antallKlikk = 0
const o3SubmitButton = document.getElementById("o3-submit-btn")
o3SubmitButton.addEventListener("click", () => {
    antallKlikk++
    o3SubmitButton.classList.toggle("buttonclicked")
    document.getElementById("o3-output").innerHTML = antallKlikk
})

