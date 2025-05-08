/*

Oppgave 1: Passordsjekker (If-setninger)

Du har fått i oppdrag å lage en innloggingsdel av en nettside.
Den skal bestå av to tekst-felter som brukeren kan skrive inn i, og en knapp.

Det ene feltet skal være av typen vanlig tekst, det andre av typen passord (slik at en kun ser *** når brukeren skriver i feltet).

Om brukeren lykkes å logge seg inn med rette brukernavn og passord, skal det komme opp en melding på skjermen (inni en <div> eller <p> som vanlig) hvor det står

"Velkommen! Du er logget inn som <...>." (Sett inn brukerens brukernavn i stedet for <...>)


Om brukeren skriver feil navn/passord, skal det i stedet komme opp en melding som sier

"Brukernavn eller passord var feil!"


Fremgangsmåte:
opprett 2 variabler i koden din, og sett verdien til et passord og brukernavn du forventer brukeren har registrert tidligere.

eksempel:
let bruker = "JohnSnow"
let pass = "supaHhemmelige345Greier!"

Bruk så en if-else setning for å avgjøre om de verdiene brukeren skriver inn i tekstfeltene, samsvarer med de verdiene du har registrert i koden.

*/

const user = "JohnSnow"
const pass = "supaHhemmelige345Greier!"
const submitLPButtonA = document.getElementById("o1a-submit-lp-btn")
submitLPButtonA.addEventListener("click", function() {
    const username = document.getElementById("o1a-username").value
    const password = document.getElementById("o1a-password").value
    if (username == user && password == pass) {
        document.getElementById("o1a-output").innerText = `Velkommen du er logget inn som ${username}.`
    } else {
        document.getElementById("o1a-output").innerText = "Brukernavn eller passord var feil!"
    }
})

/*
Oppgave 1b


Samme oppgave, men nå skal det legges ved litt CSS basert på om brukeren skriver inn korrekt brukernavn og passord, eller ikke.

Ofte lager vi styling som sier at ting gikk bra - md farge grønt, eller rødt om ting ikke gikk bra.

Vi kan løse oppgaven ved å style div'en (eller p'en om du har valgt det) med en spesiell bakgrunnsfarge for å illustrere om innloggingen gikk bra eller ikke. Det er vanlig å lage to ulike klasser, og hekte den aktuelle klassen på div-elementet ETTER at brukeren har trykket på login-knappen

La oss si at du har klassene .verified og .refused, der verified er stylet med en grønn bakgrunnsfarge , mens refused er styling med rød bakgrunnsfarge.

I løpet av if-setningen vi benyttet i a)-delen av oppgaven, kan vi da også legge til at vi ønsker å endre stylingen til div-tagen basert på om innloggingen var vellykket eller ikke:


Det gjør vi ved å skrive følgende


document.getElementById("output").classList.add("verified");
document.getElementById("output").classList.remove("refused");


Her sier vi at vi ønsker å legge elementet som har Id'en "output" med i klassen verified. (Da får den grønn bakgrunn) dersom brukeren logget inn korrekt. Og motsatt om ikke.
Samtidig ønsker vi å fjerne elementet fra klassen refused, om den allerede har vært rød.

I kode gjøres dette ved bruk av funksjonen .classList.add() og .classList.remove()

*/

const submitLPButtonB = document.getElementById("o1b-submit-lp-btn")
submitLPButtonB.addEventListener("click", function() {
    const username = document.getElementById("o1b-username").value
    const password = document.getElementById("o1b-password").value
    if (username == user && password == pass) {
        document.getElementById("o1b-output").innerText = `Velkommen du er logget inn som ${username}.`
        document.getElementById("o1b-output").classList.add("verified")
        document.getElementById("o1b-output").classList.remove("refused")

    } else {
        document.getElementById("o1b-output").innerText = "Brukernavn eller passord var feil!"
        document.getElementById("o1b-output").classList.add("refused")
        document.getElementById("o1b-output").classList.remove("verified")
    }
})

/*
Oppgave 2: Epost-generator versjon 2



a) Brukeren skriver inn fornavn, mellomnavn og etternavn i hvert sitt tekstfelt på siden. Når brukeren trykker på en knapp, skal programmet lage en epostadresse automagisk på formen

"3 første bokstaver av fornavn" + "." + "første bokstav av mellomnavn" + "." + "etternavn" @alf.no



eksempel: Ole Dole Doffen

	"Din epostadresse er: ole.d.doffen@andeby.com"
*/
const submitGenEmailButtonA = document.getElementById("o2a-submit-btn")
submitGenEmailButtonA.addEventListener("click", function() {
    const fname = document.getElementById("o2a-fname").value.toLowerCase()
    const mname = document.getElementById("o2a-mname").value.toLowerCase()[0]
    const lname = document.getElementById("o2a-lname").value.toLowerCase()
    document.getElementById("o2a-output").innerText = `Din epost adresse er: ${fname}.${mname}.${lname}@andeby.com`
})

/*

b) Hva om brukeren ikke har mellomnavn ? !? (Tips bruk if-setning for å se om variabelen mellomnavn er tom, dvs == "").

Om brukeren ikke skriver inn mellomnavn, ønsker vi at en heller skal benytte en annen "formel" for generering av epost:

    "hele fornavnet" + "-" + "2 første bokstaver i etternavn" @alf.no

eksempel: Donald Duck

"Din epostadresse er: donald-du@andeby.com"


Tips: bruk String - funksjon(eksempelvis: slice()) eller indekser(eksempelvis: fornavn[0]) for å få fatt i de bokstavene du trenger fra hvert ord...
*/

const submitGenEmailButtonB = document.getElementById("o2b-submit-btn")
submitGenEmailButtonB.addEventListener("click", function() {
    const fname = document.getElementById("o2b-fname").value.toLowerCase()
    const mname = document.getElementById("o2b-mname").value.toLowerCase()
    const lname = document.getElementById("o2b-lname").value.toLowerCase()
    if (!mname) {
        document.getElementById("o2b-output").innerText = `Din epostadresse er: ${fname}-${lname.slice(0, 2)}@andeby.com`
    } else {
        document.getElementById("o2b-output").innerText = `Din epostadresse er: ${fname}.${mname}.${lname}@andeby.com`
    }
})

/*
Oppgave 3 - Fergebilletter – Rabatt til pensjonister og barn

Lag et program som beregner kostnad på bussreiser etter følgende regler:

- 50% for barn under 12 år.
- 20% for pensjonister, dvs. folk over 67 år.
- Ingen rabatt for de øvrige aldersgruppene. = full pris som er 100kr

a) Skriv ut alder på personen, og forventet rabatt

eksempel "du er pensjonist og får 20% rabatt"
*/

let rabatt = 0
const price = 100
const submitGenRabattButtonA = document.getElementById("o3a-submit-btn")
submitGenRabattButtonA.addEventListener("click", function() {
    const age = Number(document.getElementById("o3a-age").value)
    if (age < 12) {
        rabatt = 0.5
        document.getElementById("o3a-output").innerText = `Du er barn og får ${rabatt * 100}% rabatt`
    } else if (age > 67) {
        document.getElementById("o3a-output").innerText = `Du er pensjonist og får ${rabatt * 100}% rabatt`
        rabatt = 0.2
    } else {
        document.getElementById("o3a-output").innerText = `Du får ingen rabatt`
    }
    document.getElementById("o3b-output").innerText = `Fergebilletten koster ${price-(rabatt*100)}kr for en tur, for en passasjer som er ${age} år gammel. God tur!`
})
