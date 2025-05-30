let mineDyr = [
    {
        name: "Stella",
        birthYear: 2010,
        breed: "Golden Retriever",
        color: "Golden",
        weight: 30,
        owner: "Alice",
        mother: "Bella",
        father: "Max"
},
{
        name: "Charlie",
        birthYear: 2015,
        breed: "Labrador",
        color: "Black",
        weight: 35,
        owner: "Bob",
        mother: "Lucy",
        father: "Buddy"
},
{
        name: "Milo",
        birthYear: 2018,
        breed: "Beagle",
        color: "Brown",
        weight: 25,
        owner: "Charlie",
        mother: "Daisy",
        father: "Rocky"
},
{
        name: "Luna",
        birthYear: 2012,
        breed: "Poodle",
        color: "White",
        weight: 20,
        owner: "David",
        mother: "Coco",
        father: "Oscar"
},
{
        name: "Bella",
        birthYear: 2016,
        breed: "Bulldog",
        color: "Brindle",
        weight: 40,
        owner: "Eve",
        mother: "Sadie",
        father: "Leo"
}
]

function renderDogsByNameAndBirthYear() {
    let output = ""
    for (let i = 0; i < mineDyr.length; i++) {
        output += `<p>${mineDyr[i].name} ble født ${mineDyr[i].birthYear}</p>`
    }
    document.getElementById("o1a-output").innerHTML = output
}

function renderDogsByNameAndParentsNames() {
    let output = ""
    for (let i = 0; i < mineDyr.length; i++) {
        output += `<p>${mineDyr[i].name} sin mor heter ${mineDyr[i].mother} og faren heter ${mineDyr[i].father}</p>`
    }
    document.getElementById("o1b-output").innerHTML = output
}

function renderDogsByNameAndAge() {
    let output = ""
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < mineDyr.length; i++) {
        const age = currentYear - mineDyr[i].birthYear;
        output += `<p>${mineDyr[i].name} er nå ${age} år.</p>`
    }
    document.getElementById("o1c-output").innerHTML = output
}

let duckFamily = [
    {
        firstname: "Donald",
        lastname: "Duck",
        address: "Andeby",
        zipcode: "12345",
        phone: { "home": "555-1234", "work": "555-5678" },
        email: { private: "donald@duck.no", work: "donald@andeby.no" },
    },
    {
        firstname: "Dolly",
        lastname: "Duck",
        address: "Andeby",
        zipcode: "12345",
        phone: { "home": "555-1234", "work": "555-5678" },
        email: { private: "dolly@andeby.no", work: "dolly@duck.no" },
    },
    {
        firstname: "Ole",
        lastname: "Duck",
        address: "Andeby",
        zipcode: "12345",
        phone: { "home": "555-1234", "work": "555-5678" },
        email: { private: "ole@andeby.no", work: "ole@duck.no" },
    },
    {
        firstname: "Dole",
        lastname: "Duck",
        address: "Andeby",
        zipcode: "12345",
        phone: { "home": "555-1234", "work": "555-5678" },
        email: { private: "dole@andeby.no", work: "dole@duck.no" },
    },
    {
        firstname: "Doffen",
        lastname: "Duck",
        address: "Andeby",
        zipcode: "12345",
        phone: { "home": "555-1234", "work": "555-5678" },
        email: { private: "doffen@andeby.no", work: "doffen@duck.no" }
    }
]

function renderDuckFamily() {
    let output = ""
    for (let i = 0; i < duckFamily.length; i++) {
        output += `<p>${duckFamily[i].firstname} ${duckFamily[i].lastname} bor i ${duckFamily[i].address}, postnummer ${duckFamily[i].zipcode}. Telefon privat: ${duckFamily[i].phone.home}, Telefon jobb: ${duckFamily[i].phone.work}, E-post privat: ${duckFamily[i].email.private}, E-post jobb: ${duckFamily[i].email.work}</p>`
    }
    document.getElementById("o2a-output").innerHTML = output
}

function renderDuckFamilyWithPrivateEmail() {
    let output = ""
    for (let i = 0; i < duckFamily.length; i++) {
        output += `<p>${duckFamily[i].firstname} ${duckFamily[i].lastname} har privat e-post: ${duckFamily[i].email.private}</p>`
    }
    document.getElementById("o2b-output").innerHTML = output
}

function renderDuckFamilyWithWorkPhone() {
    let output = ""
    for (let i = 0; i < duckFamily.length; i++) {
        output += `<p>${duckFamily[i].firstname} ${duckFamily[i].lastname} har jobbtelefon: ${duckFamily[i].phone.work}</p>`
    }
    document.getElementById("o2c-output").innerHTML = output
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
    },
]

function renderTeamNamesAndPositions() {
    let output = ""
    for (let i = 0; i < lag.length; i++) {
        output += `<p>${lag[i].Fornavn} ${lag[i].Etternavn} spiller som ${lag[i].Posisjon} og har draktnummer ${lag[i].Nummer}.</p>`
    }
    document.getElementById("o3a-output").innerHTML = output
}

function renderTeamNamesAndPositionAngrepsspillere() {
    let output = ""
    for (let i = 0; i < lag.length; i++) {
        if (lag[i].Posisjon === "Angrepsspiller") {
            output += `<p>${lag[i].Fornavn} ${lag[i].Etternavn} spiller som ${lag[i].Posisjon} og har draktnummer ${lag[i].Nummer}.</p>`
        }
    }
    document.getElementById("o3b-output").innerHTML = output
}

function renderTeamMembersByPosition() {
    const selectedPosition = document.getElementById("position-select").value
    let output = ""
    for (let i = 0; i < lag.length; i++) {
        if (lag[i].Posisjon === selectedPosition) {
            output += `<p>${lag[i].Fornavn} ${lag[i].Etternavn} spiller som ${lag[i].Posisjon} og har draktnummer ${lag[i].Nummer}.</p>`
        }
    }
    document.getElementById("o3c-output").innerHTML = output
}

function renderTeamMembersWithCards() {
    let output = ""
    for (let i = 0; i < lag.length; i++) {
        output += `
            <div class="card">
                <h3>${lag[i].Fornavn} ${lag[i].Etternavn}</h3>
                <p>Posisjon: ${lag[i].Posisjon}</p>
                <p>Draktnummer: ${lag[i].Nummer}</p>
                <img src="${lag[i].Image}" alt="${lag[i].Fornavn} ${lag[i].Etternavn}">
            </div>
        `
    }
    document.getElementById("o3d-output").innerHTML = output
}
