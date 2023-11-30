const colorBtn = document.getElementById("newCol")
const answer = document.querySelector("p")
const boxes = document.getElementById("squares")
const topBg = document.getElementById("topbg")
const heading = document.querySelector("h1")
const easyBtn = document.getElementById("easy")
const hardBtn = document.getElementById("hard")
let colors = []
let numColors = 6

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numColors = 3
    resetGame()
})

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numColors = 6
    resetGame()
})

colorBtn.addEventListener("click", function () {
    resetGame()
})

function resetGame() {
    boxes.innerHTML = ""
    heading.innerText = ""
    topBg.style.background = ""
    answer.textContent = ""
    colors = []

    for (let i = 0; i < numColors; i++) {
        const newBox = document.createElement("div")
        newBox.classList.add("box")
        const boxColor = generateColor()
        colors.push(boxColor)
        newBox.style.background = boxColor
        boxes.appendChild(newBox)
    }
    heading.innerText = colors[Math.floor(Math.random() * colors.length)]

    checkColor()
}

function generateColor() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var rgb = `rgb(${r}, ${g}, ${b})`
    return rgb
}

function checkColor() {
    boxes.childNodes.forEach((square) => {
        square.addEventListener("click", (event) => {
            const clickedColor = event.target.style.backgroundColor
            if (colors.includes(clickedColor)) {
                answer.textContent = "correct"
                topBg.style.background = clickedColor;
            } else {
                answer.textContent = "wrong"
                event.target.classList.add("fade")
            }
        })
    })
}

resetGame()