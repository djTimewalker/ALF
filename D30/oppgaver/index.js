/*
Oppgave 1
Historiegenerator
Vi skal lage en historie-generator. Historien skal bli satt sammen
ved å hente verdier fra brukeren gjennom elementer på nettsiden, og så
sette disse verdiene sammen med ulike ferdige tekststrenger for å få en komplett
historie.

Hensikten med oppgaven er å repetere hvordan man henter ut verdier
fra skjemaelementer, samt å se hvordan man kan bruke disse verdiene, som da har
ulike typer data, til å bygge opp en storre tekststreng.

- Lag en overskrift <h2> som ønsker velkommen til "generatoren"

- legg til et tekstfelt for navn
- legg til en nedtrekksmeny for kjønn - ala jente, gutt, kvinne, mann, gæmlis etc
- legg til et Nummer-felt for fødselsår

Sett det hele samme til en tekst-streng på format noe slik som:

`Det var en gang en <kjonn> ${kjonn} som het <navn>, og var født i <aar>. Denne personen er nå <x> år, og har <n> år igjen til 100-års-dagen sin!`

Hint: en kan også ha beregninger inne i en ${}. Eksempel ${100 - alder}
*/
document.getElementById("o1-submit-btn").addEventListener("click", function () {
    const name = document.getElementById("o1-input-name").value
    const gender = document.getElementById("o1-input-gender").value
    const birthYear = Number(document.getElementById("o1-input-year").value)
    let genderAge = ""
    let thisYear = new Date().getFullYear()
    let age = thisYear - birthYear
    if (age < 18 && gender == "mann") {
        genderAge = "gutt"
    } else if (age < 67 && gender == "mann") {
        genderAge = "mann"
    } else if (age < 18 && gender == "kvinne") {
        genderAge = "jente"
    } else if (age < 67 && gender == "kvinne") {
        genderAge = "dame"
    } else {
        genderAge = "gammel " + gender
    }
    document.getElementById("o1-output").innerText = `Det var en gang en ${genderAge} som het ${name}, og var født i ${birthYear}. Denne personen er nå ${age} år og har ${100 - age} år igjen til 100-års-dagen sin!`
})

/*
2 Gjett-et-tall lek!

Lag et program hvor brukeren taster inn et heltall mellom 0
og 100 i et tekstfelt, og trykker på en knapp for å sjekke
om det er gjettet rett.

a) definer en variabel rettTall og sett verdien i kode
(hard-coding).

La brukeren gjette. Om tallet er for stort, skriv dette
i et felt til brukeren, og be brukeren prøve på nytt.

	"Du gjettet på <tall>. Dette er for høyt. Prøv igjen!"


Gjetter brukeren for lavt, skrive dette på samme måte som over.

	"Du gjettet på <tall>. Dette er for lavt. Prøv igjen!"


Om brukeren gjetter rett, skriver du dette, og en
gratulasjonsmelding


"WUHUU!! Du gjettet rett!! Tallet er <tall>!"

Hint: Her må du bruke if-setninger og sjekke om tallet
brukeren skriver inn er høyere eller lavere enn det du
har hardkodet i koden (feks. let rettTall = 73 )

*/

const rettTall = 57
document.getElementById("o2a-submit-btn").addEventListener("click", function () {
    const gjettetTall = Number(document.getElementById("o2a-input-number").value)
    if (gjettetTall < rettTall) {
        document.getElementById("o2a-output").innerText = `Du gjettet på ${gjettetTall}. Dette er for lavt prøv igjen!`
    } else if (gjettetTall > rettTall) {
        document.getElementById("o2a-output").innerText = `Du gjettet på ${gjettetTall}. Dette er for høyt. Prøv igjen!`
    } else {
        document.getElementById("o2a-output").innerText = `WUHUU!! Du gjettet rett!! Tallet er ${rettTall}!`
    }
})

/*
b) Denne kan utvides ved å trekke et TILFELDIG tall hver gang
programmet kjøres. I stedet for å skrive tallet direkte i
koden, kan vi få JS til å finne et tilfeldig tall ved å
bruke Math biblioteket og random-funksjonen slik som dette

let hemmeligTall = Math.floor (Math.random() * 20 );

let teller = 5

teller = teller - 1
teller--

teller = teller + 1
teller++

document.getElementByID("utskrift").innerHTML += "Dette er
ny tekst"

Denne benytter den innebyggede Math-klassen som gir oss mange
verktøy så vi slipper å lage de selv. Som feks å lage en
tilfeldig verdi. random() er en funksjon som trekker et tall
mellom 0 og 1 (altså et desimal-tall). Vi ganger det derfor
med 101 for å få heltall. Math.floor gjør at tallet rundes
ned slik at vi blir kvitt eventuelle desimaler.
*/
let hemmeligTall
let teller
document.getElementById("o2b-start-btn").addEventListener("click", function () {
    hemmeligTall = Math.floor(Math.random() * 100 + 1)
    teller = 5
    document.getElementById("o2b-output").innerText = `Spillet er startet! Du har ${teller} forsøk på å gjette riktig tall. Legg inn ditt tall og sjekk om du har gjettet riktig.`
})

document.getElementById("o2b-submit-btn").addEventListener("click", function () {
    const gjettetTall = Number(document.getElementById("o2b-input-number").value)
    teller--
    if (teller > 0) {
        if (gjettetTall < hemmeligTall) {
            document.getElementById("o2b-output").innerText = `Du gjettet på tall ${gjettetTall}. Dette er for lavt. Du har nå ${teller} forsøk igjen!`
        } else if (gjettetTall > hemmeligTall) {
            document.getElementById("o2b-output").innerText = `Du gjettet på ${gjettetTall}. Dette er for høyt. Du har nå ${teller} forsøk igjen!`
        } else {
            document.getElementById("o2b-output").innerText = `Du gjettet riktig tall på ${5 - teller} forsøk! Klikk 'Start spillet!' for å starte et nytt spill`
        }
    } else {
        document.getElementById("o2b-output").innerText = `Du har brukt opp alle forsøkene uten å gjette riktig tall. Det riktige tallet var ${hemmeligTall}. Klikk 'Start spillet!' for å starte på ny.`
    }
})