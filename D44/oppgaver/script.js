function loadAndDisplayData() {
    fetch('land.json')
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('o1a-output')
            outputDiv.innerHTML = "" // Clear previous content
            data.countries.forEach(country => {
                const countryDiv = document.createElement('div')
                const countryH2 = document.createElement('h2')
                const countryFlag = document.createElement('img')
                const countryPop = document.createElement('p')
                const countryCapital = document.createElement('p')
                countryDiv.className = 'card'
                countryH2.textContent = country.name
                countryFlag.src = country.flag
                countryFlag.alt = `Flag of ${country.name}`
                countryPop.textContent = `Population: ${country.inhabitants}`
                countryCapital.textContent = `Capital: ${country.capital}`
                countryDiv.appendChild(countryH2)
                countryDiv.appendChild(countryFlag)
                countryDiv.appendChild(countryPop)
                countryDiv.appendChild(countryCapital)
                outputDiv.appendChild(countryDiv)
            })
        })
        .catch(error => console.error('Error loading JSON:', error))
}

async function loadAndDisplayDataAsync() {
    let arr = await loadJSONData()
    let cards = arr.countries.map(generateCountryCard)
    displayJSONData(cards)
}

async function loadJSONData() {
    try {
        const response = await fetch('land.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error loading JSON:', error)
    }
}

function generateCountryCard(country) {
    const countryDiv = document.createElement('div')
    const countryH2 = document.createElement('h2')
    const countryFlag = document.createElement('img')
    const countryPop = document.createElement('p')
    const countryCapital = document.createElement('p')
    countryDiv.className = 'card'
    countryH2.textContent = country.name
    countryFlag.src = country.flag
    countryFlag.alt = `Flag of ${country.name}`
    countryPop.textContent = `Population: ${country.inhabitants}`
    countryCapital.textContent = `Capital: ${country.capital}`
    countryDiv.appendChild(countryH2)
    countryDiv.appendChild(countryFlag)
    countryDiv.appendChild(countryPop)
    countryDiv.appendChild(countryCapital)
    return countryDiv
}

    function displayJSONData(cards) {
        const outputDiv = document.getElementById('o1b-output')
        outputDiv.innerHTML = "" // Clear previous content
        cards.forEach(card => {
            outputDiv.appendChild(card)
    })
}

function fetchAPIData() {
    let url = 'https://jsonplaceholder.typicode.com/comments?postId=1'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('o2a-output')
            outputDiv.innerHTML = "" // Clear previous content
            data.forEach(comment => {
                const postDiv = document.createElement('div')
                const postTitle = document.createElement('h2')
                const postBody = document.createElement('p')
                postTitle.textContent = comment.name
                postBody.textContent = comment.body
                postDiv.appendChild(postTitle)
                postDiv.appendChild(postBody)
                outputDiv.appendChild(postDiv)
            })
        })
        .catch(error => console.error('Error fetching API data:', error))
}


async function fetchAPIDataAsync() {
    let url = 'https://jsonplaceholder.typicode.com/comments?postId=1'
    try {
        const response = await fetch(url)
        const data = await response.json()
        const outputDiv = document.getElementById('o2b-output')
        outputDiv.innerHTML = "" // Clear previous content
        data.forEach(comment => {
            const postDiv = document.createElement('div')
            const postTitle = document.createElement('h2')
            const postBody = document.createElement('p')
            postTitle.textContent = comment.name
            postBody.textContent = comment.body
            postDiv.appendChild(postTitle)
            postDiv.appendChild(postBody)
            outputDiv.appendChild(postDiv)
        })
    } catch (error) {
        console.error('Error fetching API data:', error)
    }
}

const stromPricesMay2025 = [49.539, 44.913, 51.769, 29.420, 74.024, 94.169, 100.167, 97.655, 76.007, 69.466, 56.233, 68.282,76.034, 64.026, 53.551, 58.255, 54.153, 46.841, 69.767, 71.154, 49.815, 52.291, 66.536, 59.516, 45.374, 56.055, 55.190, 66.870, 53.457, 53.999, 54.838]
function calculateAveragePrice(prices) {
    let total = stromPricesMay2025.reduce((acc, price) => acc + price, 0)
    let average = total / stromPricesMay2025.length
    console.log('Gjennomsnittlig strømpris for mai 2025:', (average / 100).toFixed(2) + ' kr/kWh')
    return average
}

function filterAbove200() {
    const filteredPrices = stromPricesMay2025.filter(price => price > 200)
    console.log('Strømpriser over 2 kr:', filteredPrices.map(price => (price/100).toFixed(2)).join(", ") + ' kr/kWh')
    return filteredPrices
}

function toSortedPrices() {
    const sortedPrices = stromPricesMay2025.sort((a, b) => a - b)
    console.log('Sorterte strømpriser:', sortedPrices.map(price => (price/100).toFixed(2)).join(", ") + ' kr/kWh')
    return sortedPrices
}

function displaySummary() {
    const outputDiv = document.getElementById('o3d-output')
    outputDiv.innerHTML = "" // Clear previous content
    const averagePrice = calculateAveragePrice(stromPricesMay2025)
    const filteredPrices = filterAbove200()
    const sortedPrices = toSortedPrices()
    outputDiv.innerHTML = `
        <h2>Oppsummering</h2>
        <p>Gjennomsnittlig strømpris: ${(averagePrice/100).toFixed(2)} kr/kWh (uten moms)</p>
        <p>Strømpriser var over 2 kr: ${filteredPrices.length} dager</p>
        <p>Sorterte strømpriser: ${sortedPrices.map(price => (price/100).toFixed(2)).join(", ")} kr/kWh</p>
    `
}