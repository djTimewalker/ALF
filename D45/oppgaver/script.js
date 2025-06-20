const myButton = document.getElementById("myButton")
const myHoverButton = document.getElementById("myHoverButton")

myButton.addEventListener("click", function() {
    console.log("Button clicked!")
})

myHoverButton.addEventListener("mouseover", function() {
    console.log("Mouse over button!")
})

let numbersArray = [1, 2, 3]
let newArray = [...numbersArray, 4]
console.log("numbersArray:", numbersArray)
console.log("newArray:", newArray)

numbersArray = [...numbersArray, 5]
console.log("numbersArray:", numbersArray)

function addNumbers(...rest) {
    return rest.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of numbers: 1,2,3,4,5,6", addNumbers(1, 2, 3, 4, 5, 6))
console.log("Sum of numbers: 10, 20, 30:", addNumbers(10, 20, 30))

let myObject = {
    name: "John",
    age: 30,
    city: "New York"
}

let { name, city } = myObject

function greet({ name, city }) {
    console.log(`Hello, my name is ${name} and I live in ${city}.`);
}
greet(myObject)

let numbersArray2 = [1, 2, 3, 4, 5]

let [first, , , , fifth] = numbersArray2
console.log("First:", first)
console.log("Fifth:", fifth)

function destructureArray(arr) {
    let [first, second, ...rest] = arr
    console.log("First:", first)
    console.log("Second:", second)
    console.log("Rest:", rest)
}

destructureArray(numbersArray2)

const createButton = document.getElementById("createButton")
createButton.addEventListener("click", function() {
    const newButton = document.createElement("button")
    const o6ButtonOutput = document.createElement("p")
    newButton.textContent = "New Button"
    newButton.addEventListener("click", function() {
        console.log("dette er fra den nyopprettede knappen!")
        o6ButtonOutput.textContent = "Du trykket på den nyopprettede knappen!"
    })
    document.getElementById("o6-output").appendChild(newButton)
    document.getElementById("o6-output").appendChild(o6ButtonOutput)
})