let randomNumbersArray = []

generateRandomNumbers()
randomNumbersArray.forEach(renderArray)

generateRandomDecimalNumbers()
let output = ""
let anon = function (number) {
    output += `\n ${number}`
    document.getElementById("o1b-output").innerText = output
}

randomNumbersArray.forEach(anon)

let catNamesArray = ["Garfield", "Pusur","Pluggen","Ludo","Pjusken","Bingo","Jakob","Lodden"]

catNamesArray.forEach(function (cat) {
    document.getElementById("o1c-output").innerText += `\n ${cat}`
})

catNamesArray.map(cat => {
    document.getElementById("o1d-output").innerText += `\n ${cat}`
})

let newSortedArray = randomNumbersArray.slice().sort((a, b) => a - b)
let newSortedCatsArray = catNamesArray.slice().sort()
let newToSortedCatsArray = catNamesArray.toSorted()
document.getElementById("o2a1-output").innerText = `${newSortedArray} \n ${newSortedCatsArray} \n ${newToSortedCatsArray}`


let newToSortedArray = randomNumbersArray.toSorted((a, b) => a - b)
document.getElementById("o2a2-output").innerText = newToSortedArray

let newSortedArrayDescending = randomNumbersArray.slice().sort((a, b) => b - a)
let newSortedCatsArrayDescending = catNamesArray.slice().sort().reverse()
let newToSortedCatsArrayDescending = catNamesArray.toSorted().reverse()
document.getElementById("o2b1-output").innerText = `${newSortedArrayDescending} \n${newSortedCatsArrayDescending} \n${newToSortedCatsArrayDescending}`

let newToSortedArrayDescending = randomNumbersArray.toSorted((a, b) => b - a)
document.getElementById("o2b2-output").innerText = newToSortedArrayDescending
function renderArray() {
    let output = ""
    randomNumbersArray.forEach(number => {
        output += `\n ${number}`
    })
    document.getElementById('o1a-output').innerText = output
}

function generateRandomNumbers() {
    randomNumbersArray = []
    for (let i = 0; i < 15; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        randomNumbersArray.push(randomNumber)
    }
}

function generateRandomDecimalNumbers() {
    randomNumbersArray = []
    for (let i = 0; i < 10; i++) {
        const randomDecimalNumber = (Math.random() * 100).toFixed(2)
        randomNumbersArray.push(randomDecimalNumber)
    }
}

