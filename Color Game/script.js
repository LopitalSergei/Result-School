const board = document.querySelector('#board')
const hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => {
		setColor(square)
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#2a2a2a'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	let hexCode = '#'
	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * hexNumbers.length)
		hexCode += hexNumbers[index]
	}
	return hexCode
}