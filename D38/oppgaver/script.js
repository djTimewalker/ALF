let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59]

function generateResultWithMaximumValue() {
    let max = arr[0]
    for (const num of arr) {
        if (num > max) {
            max = num
        }
    }
    document.getElementById("o1a-output").innerText = "Maksimal verdi: " + max
}

function generateResultWithSortedArray() {
    let sortedArr = arr.sort((a, b) => a - b)
    document.getElementById("o1b-output").innerText = "Sortert: " + sortedArr
}

function generateResultWithReversedArray() {
    let reversedArr = arr.reverse()
    document.getElementById("o1c-output").innerText = "Reversert: " + reversedArr
}

function addElementToArray() {
    arr.push(92)
    document.getElementById("o1d-output").innerText = "Element lagt til: 92" + "\nNytt array: " + arr
}

function getArrayLength() {
    let length = arr.length
    document.getElementById("o1e-output").innerText = "Lengde: " + length
}

function removeFirstElement() {
    let removedElement = arr.shift()
    document.getElementById("o1f-output").innerText = "Fjernet første element: " + removedElement + "\nNytt array: " + arr
}

function checkIfArray() {
    let isArray = Array.isArray(arr)
    document.getElementById("o1g-output").innerText = "Er det et array? " + isArray
}

function generateAbsoluteValuesArray() {
    let Absoluttverdier = arr.map(num => Math.abs(num))
    document.getElementById("o1h-output").innerText = "Absoluttverdier: " + Absoluttverdier
}

let lag = [
    {
        Nummer: 1,
        Posisjon: "Keeper",
        Fornavn: "Mathias",
        Etternavn: "Dyngeland",
        Høyde: 184,
        Nasjonalitet: "Norge",
        Født: "07-10-1995",
        Image: "images/1_Mathias_Dyngeland.png",
    },
    {
        Nummer: 12,
        Posisjon: "Keeper",
        Fornavn: "Martin",
        Etternavn: "Børsheim",
        Nasjonalitet: "Norge",
        Født: "18-02-2005",
        Image: "images/12_Martin_Børsheim.png",
    },
    {
        Nummer: 24,
        Posisjon: "Keeper",
        Fornavn: "Mathias",
        Etternavn: "Klausen",
        Nasjonalitet: "Norge",
        Født: "10-10-2007",
        Image: "images/24_Mathias_Klausen.png",
    },
    {
        Nummer: 21,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Denzel",
        Etternavn: "De Roeve",
        Nasjonalitet: "Belgia",
        Født: "10-08-2004",
        Image: "images/21_Denzel_De_Roeve.png",
    },
    {
        Nummer: 38,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Patrik",
        Etternavn: "Andersen",
        Nasjonalitet: "Norge",
        Født: "30-01-2005",
        Image: "images/38_Patrik_Andersen.png",
    },
    {
        Nummer: 2,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Martin",
        Etternavn: "Hellan",
        Nasjonalitet: "Norge",
        Født: "17- 08-2003",
        Image: "images/2_Martin_Hellan.png",
    },
    {
        Nummer: 3,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Fredrik",
        Etternavn: "Pallesen Knudsen",
        Nasjonalitet: "Norge",
        Født: "30-08-1996",
        Image: "images/3_Fredrik_Pallesen_Knudsen.png",
    },
    {
        Nummer: 17,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Joachim",
        Etternavn: "Soltvedt",
        Nasjonalitet: "Norge",
        Født: "09-09-1995",
        Image: "images/17_Joachim_Soltvedt.png",
    },
    {
        Nummer: 6,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Japhet",
        Etternavn: "Sery Larsen",
        Nasjonalitet: "Danmark",
        Født: "10-04-2000",
        Image: "images/6_Japhet_Sery_Larsen.png",
    },
    {
        Nummer: 15,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Jonas",
        Etternavn: "Torsvik",
        Nasjonalitet: "Norge",
        Født: "24-05-2005",
        Image: "images/15_Jonas_Torsvik.png",
    },
    {
        Nummer: 23, // her
        Posisjon: "Forsvarsspiller",
        Fornavn: "Thore",
        Etternavn: "Pedersen",
        Nasjonalitet: "Norge",
        Født: "11-08-1996",
        Image: "images/23_Thore_Pedersen.png",
    },
    {
        Nummer: 26,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Eivind",
        Etternavn: "Helland",
        Nasjonalitet: "Norge",
        Født: "25-04-2005",
        Image: "images/26_Eivind_Helland.png",
    },
    {
        Nummer: 43,
        Posisjon: "Forsvarsspiller",
        Fornavn: "Rasmus",
        Etternavn: "Holten",
        Nasjonalitet: "Norge",
        Født: "20-02-2005",
        Image: "images/43_Rasmus_Holten.png",
    },
    {
        Nummer: 5,
        Posisjon: "Midtbanespiller",
        Fornavn: "Sakarias",
        Etternavn: "Opsahl",
        Nasjonalitet: "Norge",
        Født: "17-07-1999",
        Image: "images/5_Sakarias_Opsahl.png",
    },
    {
        Nummer: 8,
        Posisjon: "Midtbanespiller",
        Fornavn: "Felix",
        Etternavn: "Horn Myhre",
        Nasjonalitet: "Norge",
        Født: "04-03-1999",
        Image: "images/8_Felix_Horn_Myhre.png",
    },
    {
        Nummer: 10,
        Posisjon: "Midtbanespiller",
        Fornavn: "Emil",
        Etternavn: "Kornvig",
        Nasjonalitet: "Norge",
        Født: "28-04-2000",
        Image: "images/10_Emil_Kornvig.png",
    },
    {
        Nummer: 14, // her
        Posisjon: "Midtbanespiller",
        Fornavn: "Ulrik",
        Etternavn: "Mathisen",
        Nasjonalitet: "Norge",
        Født: "18-01-1999",
        Image: "images/14_Ulrik_Mathisen.png",
    },
    {
        Nummer: 19,
        Posisjon: "Midtbanespiller",
        Fornavn: "Eggert Aron",
        Etternavn: "Gudmundsson",
        Nasjonalitet: "Island",
        Født: "08-02-2004",
        Image: "images/19_Eggert_Aron_Gudmundsson.png",
    },
    {
        Nummer: 25,
        Posisjon: "Midtbanespiller",
        Fornavn: "Niklas",
        Etternavn: "Wassberg",
        Nasjonalitet: "Norge",
        Født: "12-06-2004",
        Image: "images/25_Niklas_Wassberg.png",
    },
    {
        Nummer: 27,
        Posisjon: "Midtbanespiller",
        Fornavn: "Mads",
        Etternavn: "Sande",
        Nasjonalitet: "Norge",
        Født: "22-03-1998",
        Image: "images/27_Mads_Sande.png",
    },
    {
        Nummer: 41,
        Posisjon: "Midtbanespiller",
        Fornavn: "Lars",
        Etternavn: "Remmem",
        Nasjonalitet: "Norge",
        Født: "18-2-2006",
        Image: "images/41_Lars_Remmem.png",
    },
    {
        Nummer: 32, // her
        Posisjon: "Midtbanespiller",
        Fornavn: "Markus",
        Etternavn: "Haaland",
        Nasjonalitet: "Norge",
        Født: "08-03-2005",
        Image: "images/32_Markus_Haaland.png",
    },
    {
        Nummer: 37,
        Posisjon: "Angrepsspiller",
        Fornavn: "Jon",
        Etternavn: "Berisha",
        Nasjonalitet: "Norge",
        Født: "21-01-2005",
        Image: "images/37_Jon_Berisha.png",
    },
    {
        Nummer: 7,
        Posisjon: "Angrepsspiller",
        Fornavn: "Mads",
        Etternavn: "Hansen",
        Nasjonalitet: "Danmark",
        Født: "28-07-2002",
        Image: "images/7_Mads_Hansen.png",
    },
    {
        Nummer: 9,
        Posisjon: "Angrepsspiller",
        Fornavn: "Niklas",
        Etternavn: "Castro",
        Nasjonalitet: "Chile",
        Født: "08-01-1996",
        Image: "images/9_Niklas_Castro.png",
    },
    {
        Nummer: 11,
        Posisjon: "Angrepsspiller",
        Fornavn: "Bård",
        Etternavn: "Finne",
        Nasjonalitet: "Norge",
        Født: "13-02-1995",
        Image: "images/11_Bård_Finne.png",
    },
    {
        Nummer: 20,
        Posisjon: "Angrepsspiller",
        Fornavn: "Aune",
        Etternavn: "Heggebø",
        Nasjonalitet: "Norge",
        Født: "29-07-2001",
        Image: "images/20_Aune_Heggebø.png",
    }
]


function renderTeamMembersWithCards() {
    let output = ""
    lag.forEach(player => {
        output += `
            <div class="card">
                <h3>${player.Fornavn} ${player.Etternavn}</h3>
                <p>Posisjon: ${player.Posisjon}</p>
                <p>Draktnummer: ${player.Nummer}</p>
                <img src="${player.Image}" alt="${player.Fornavn} ${player.Etternavn}" width="100px">
            </div>
        `
    })
    document.getElementById("o2a-output").innerHTML = output
}

function renderTeamMembersWithDOM() {
    const container = document.getElementById("o2b-output")
    container.innerHTML = ""
    lag.forEach(player => {
        const card = document.createElement("div")
        card.className = "card"

        const title = document.createElement("h3")
        title.textContent = player.Fornavn + " " + player.Etternavn

        const position = document.createElement("p")
        position.textContent = "Posisjon: " + player.Posisjon

        const number = document.createElement("p")
        number.textContent = "Draktnummer: " + player.Nummer

        const image = document.createElement("img")
        image.src = player.Image
        image.alt = player.Fornavn + " " + player.Etternavn + " bilde"
        image.width = 100
        card.appendChild(title)
        card.appendChild(position)
        card.appendChild(number)
        card.appendChild(image)

        container.appendChild(card)
    })
}
