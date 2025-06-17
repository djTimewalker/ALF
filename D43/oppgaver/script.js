
function getRandomUsers() {
    fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then(data => {
            let output = document.getElementById("o1-output")
            output.innerHTML = "" // Clear previous content
            data.results.forEach(user => {
                const cardDiv = document.createElement("div")
                const cardImage = document.createElement("img")
                const cardH2 = document.createElement("h2")
                const cardP = document.createElement("p")
                const cardPGender = document.createElement("p")
                const cardPLocation = document.createElement("p")

                cardDiv.classList.add("user-card")
                cardImage.src = user.picture.large
                cardImage.alt = `${user.name.first} ${user.name.last} large user picture`
                cardH2.textContent = `${user.name.first} ${user.name.last}`
                cardPGender.textContent = `Gender: ${user.gender}`
                cardPLocation.textContent = `Location: ${user.location.country}`

                cardDiv.appendChild(cardImage)
                cardDiv.appendChild(cardH2)
                cardDiv.appendChild(cardPGender)
                cardDiv.appendChild(cardPLocation)
                output.appendChild(cardDiv)
            })
        })
    }

function getWeatherForecast() {
    fetch("https://goweather.herokuapp.com/weather/Bergen")
        .then((res) => res.json())
        .then(data => {
            let output = document.getElementById("o2-output")
            output.innerHTML = "" // Clear previous content
            console.log(data)
                const cardDiv = document.createElement("div")
                const cardH2 = document.createElement("h2")
                const cardPTemp = document.createElement("p")
                const cardPWind = document.createElement("p")
                const cardPDesc = document.createElement("p")

                cardDiv.classList.add("weather-card")
                cardH2.textContent = "Bergen"
                cardPTemp.textContent = `${data.temperature}`
                cardPWind.textContent = `${data.wind}`
                cardPDesc.textContent = `${data.description}`

                cardDiv.appendChild(cardH2)
                cardDiv.appendChild(cardPTemp)
                cardDiv.appendChild(cardPWind)
                cardDiv.appendChild(cardPDesc)

                output.appendChild(cardDiv)
    })
}
