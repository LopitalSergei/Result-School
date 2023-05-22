const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

let item

for (let i = 0; i < items.length; i++) {
	items[i].addEventListener('dragstart', dragstart)
	items[i].addEventListener('dragend', dragend)
}

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover)
	placeholder.addEventListener('dragenter', dragenter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
	item = event.target
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'))
}

function dragend(event) {
	event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
	event.preventDefault()
}

function dragenter(event) {
	event.target.classList.add('hovered')
}

function dragleave(event) {
	event.target.classList.remove('hovered')
}

function dragdrop(event) {

	if (event.target.classList[0] !== 'item') {
		event.target.append(item)
	}
	event.target.classList.remove('hovered')
}