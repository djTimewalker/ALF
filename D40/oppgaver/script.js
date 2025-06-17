let people = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        occupation: "Engineer",
        contact: {
            email: "alice@example.com",
            phone: "123-456-7890"
        },
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        id: 2,
        name: "Bob",
        age: 25,
        occupation: "Designer",
        contact: {
            email: "bob@example.com",
            phone: "987-654-3210"
        },
        address: {
            city: "Los Angeles",
            country: "USA"
        }
    },
    {
        id: 3,
        name: "Charlie",
        age: 35,
        occupation: "Teacher",
        contact: {
            email: "charlie@example.com",
            phone: "555-555-5555"
        },
        address: {
            city: "Chicago",
            country: "USA"
        }
    },
    {
        id: 4,
        name: "Diana",
        age: 28,
        occupation: "Doctor",
        contact: {
            email: "diana@example.com",
            phone: "222-333-4444"
        },
        address: {
            city: "Houston",
            country: "USA"
        }
    }
];


let cars = [
    {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        owner: {
            name: "Alice",
            id: 1
        },
        specs: {
            color: "Blue",
            engine: "1.8L",
            transmission: "Automatic"
        }
    },
    {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2018,
        owner: {
            name: "Bob",
            id: 2
        },
        specs: {
            color: "Red",
            engine: "2.0L",
            transmission: "Manual"
        }
    },
    {
        id: 3,
        make: "Ford",
        model: "Focus",
        year: 2021,
        owner: {
            name: "Charlie",
            id: 3
        },
        specs: {
            color: "White",
            engine: "1.5L",
            transmission: "Automatic"
        }
    },
    {
        id: 4,
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        owner: {
            name: "Diana",
            id: 4
        },
        specs: {
            color: "Black",
            engine: "Electric",
            transmission: "Automatic"
        }
    }
];


const o1aUtskrift = document.getElementById("o1a-output")
const o1bUtskrift = document.getElementById("o1b-output")
const o1cUtskrift = document.getElementById("o1c-output")
// let output = ""

// let peoplesArray = people.map(person => {
    // output += `
    // <div class="card">
        // <h1>${person.name} (${person.age})</h1>
        // <h2>${person.occupation}</h2>
        // <p>${person.address.city} / ${person.address.country}</p>
        // <p>${person.contact.email}</p>
        // <p>${person.contact.phone}</p>
    // </div>
    // `
// })
// o1aUtskrift.innerHTML = output
function printOut() {
    o1bUtskrift.innerHTML = people.map(generatePersonCard)
}
function generatePersonCard(person) {
    return `
    <div class="card">
    <h1>${person.name} (${person.age})</h1>
    <h2>${person.occupation}</h2>
    <p>${person.address.city} / ${person.address.country}</p>
    <p>${person.contact.email}</p>
    <p>${person.contact.phone}</p>
    </div>
    `
}
function printOutCard() {
    output = ""
    people.filter(person => person.occupation === "Teacher").map(person => {
    output += `
    <div class="card">
    <h1>${person.name} (${person.age})</h1>
    <h2>${person.occupation}</h2>
    <p>${person.address.city} / ${person.address.country}</p>
    <p>${person.contact.email}</p>
    <p>${person.contact.phone}</p>
    </div>
    `
    })
    o1cUtskrift.innerHTML = output
}