const o1fname = document.getElementById("o1-input-fname")
const o1lname = document.getElementById("o1-input-lname")
const o1Output = document.getElementById("o1-output")
let fnavn, enavn
window.onload = oppstart()

function oppstart() {
    getNameFromLocalStorage()
    o1PrintOut()
    getColorAndSet()
}

function o1PrintOut() {
    if (!fnavn) {
        //  fnavn === undefined || fnavn === null || fnavn === ""
        o1Output.innerText = `Hyggelig å se nye brukere her! Velkommen til oss!`
    } else {
        o1Output.innerText = `Velkommen tilbake til oss, ${fnavn} ${enavn}!`
    }
}

function saveNameToLocalStorage() {
    fnavn = o1fname.value
    enavn = o1lname.value

    localStorage.setItem("fornavn", fnavn)
    localStorage.setItem("etternavn", enavn)
}

function getNameFromLocalStorage() {
    fnavn = localStorage.getItem("fornavn")
    enavn = localStorage.getItem("etternavn")
}

function clearLocalStorage() {
    localStorage.clear()
}

function saveColorToLocalStorageAndSet() {
    let bgcolor = document.getElementById("bgcolor").value
    localStorage.setItem("bakgrunnsfarge", bgcolor)
    document.body.style.backgroundColor = bgcolor
}

function getColorAndSet() {
    document.body.style.backgroundColor = localStorage.getItem("bakgrunnsfarge")
}

function o3aPrintOut() {
    fetch('./Daglige_steg.txt')
    .then((res) => res.text())
    .then((data) => {
        let output = ""
        let daysArray = data.split(", ").map(Number)
        console.log(daysArray)
        daysArray.map((tip, index) => {
            output += `${index+1} januar: ${tip}kr \n`
            })
            document.getElementById("o3a-output").innerText = output
        })
    }