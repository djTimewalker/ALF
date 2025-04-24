const centerBtn = document.getElementById("center-btn")
const startBtn = document.getElementById("start-btn")
const endBtn = document.getElementById("end-btn")
const spaceEvenlyBtn = document.getElementById("space-evenly-btn")
const flexDirectionBtn = document.getElementById("flex-direction-btn")
const flagContainer = document.getElementById("flag-container")

console.log(flagContainer)

centerBtn.addEventListener("click", () => { flagContainer.style.justifyContent = "center" })
startBtn.addEventListener("click", () => { flagContainer.style.justifyContent = "flex-start" })
endBtn.addEventListener("click", () => { flagContainer.style.justifyContent = "flex-end" })
spaceEvenlyBtn.addEventListener("click", () => { flagContainer.style.justifyContent = "space-evenly" })
flexDirectionBtn.addEventListener("click", () => { flagContainer.classList.toggle("flex-direction") })
