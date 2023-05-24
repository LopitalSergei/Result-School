const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'));
		screens[1].classList.add('up')
		strartGame()
	}
})

board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createRandomCircle()
	}
})

function strartGame() {
	setInterval(decreaseTime, 1000)
	createRandomCircle()
	setTime(time)
}

function finishGame() {
	timeEl.parentNode.classList.add('hide')
	board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
	if (time === 0) {
		finishGame()
	} else {
		let current = --time
		if (current < 10) {
			current = `0${current}`
		}
		setTime(current)
	}
}

function setTime(value) {
	timeEl.innerHTML = `00:${value}`
}

function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10, 60)
	const { width, height } = board.getBoundingClientRect()

	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)

	circle.classList.add('circle')
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.style.background = `linear-gradient(${getRandomNumber(0, 180)}deg, ${getRandomColor()}, ${getRandomColor()})`

	board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
	let hexCode = "#"
	for (let i = 0; i < 6; i++) {
		let randomIndex = Math.floor(Math.random() * hexNumbers.length)

		hexCode += hexNumbers[randomIndex]
	}
	return hexCode
}